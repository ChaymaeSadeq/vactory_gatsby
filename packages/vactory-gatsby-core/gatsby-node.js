const api = require('vactory-gatsby-api');
const fse = require('fs-extra');
const path = require('path');
const chalk = require("chalk");
const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;
const astDynamicField = require("./src/ast/dynamicField");
const astImageStyles = require("./src/ast/imageStyles");

/**
 * Only one instance of this is allowed.
 *
 * @param _
 * @param pluginOptions
 * @returns {Promise<void>}
 */
exports.onPreInit = async (_, pluginOptions) => {
    const apiConfig = appConfig.api;
    const languagesConfig = appConfig.languages;

    // Init API.
    api.init(
        apiConfig.url,
        apiConfig.headers,
        languagesConfig.availableLanguages
    );
};

exports.onPreBootstrap = async ({store}, pluginOptions) => {
    const enabledMenus = appConfig.menus;
    let i18nTranslations = {
        resources: {},
    };

    // Save Configuration
    const configurationFile = `${__dirname}/.tmp/appConfig.json`;
    try {
        await fse.ensureFile(configurationFile);
        await fse.writeJson(configurationFile, appConfig);
    } catch (err) {
        console.error(err)
    }

    // Get translations.
    console.log(chalk.green("[\u2713] Source Translations"));
    try {
        const response = await api.getRest('_translations', {}, false);
        response.data.resources.forEach(({locale, translations}) => {
            i18nTranslations.resources[locale] = {
                translation: {},
            };
            translations.forEach(({source, translation}) => {
                i18nTranslations.resources[locale]["translation"][source] = translation
            })
        })
    } catch (error) {
        console.error(error)
    }

    // Save translations
    const translationsFile = `${__dirname}/.tmp/translations.json`;
    try {
        await fse.ensureFile(translationsFile);
        await fse.writeJson(translationsFile, i18nTranslations);
    } catch (err) {
        console.error(err)
    }

    // Process image styles.
    await createImageStyles();

    // Get breadcrumbs.
    console.log(chalk.green("[\u2713] Source Breadcrumbs"));
    let breadcrumbData = {
        breadcrumbs: []
    };
    try {
        const results = await api.getRest('_breadcrumb');

        for (const result of results) {
            const {response} = result;
            breadcrumbData.breadcrumbs.push(response.data)
        }

        breadcrumbData.breadcrumbs = breadcrumbData.breadcrumbs.reduce(function (arr, row) {
            return arr.concat(row)
        }, []);

    } catch (error) {
        console.error(error)
    }

    // Save breadcrumb
    const breadcrumbFile = `${__dirname}/.tmp/breadcrumbs.json`;
    try {
        await fse.ensureFile(breadcrumbFile);
        await fse.writeJson(breadcrumbFile, breadcrumbData);
    } catch (err) {
        console.error(err)
    }

    // Widgets mapping.
    astDynamicField.generateCombinedFile('widgets.mapping.js',`${__dirname}/.tmp/widgetsMapping.js`);
    astDynamicField.generateCombinedFile('widgets.mapping.amp.js',`${__dirname}/.tmp/widgetsMapping.amp.js`);

    // Menus
    console.log(chalk.green("[\u2713] Source Menus"));
    const menusIds = enabledMenus;
    let menuData = {
        menus: []
    };

    for (const menu of menusIds) {
        console.log(chalk.blue(`[\u25E6] ${menu}`));
        try {
            const results = await api.getRest('_menus', {
                params: {
                    menu_name: menu
                }
            });

            for (const result of results) {
                const {locale, response} = result;

                menuData.menus.push({
                    menu_name: menu,
                    locale,
                    items: response.data.json
                })
            }

        } catch (error) {
            console.error(error)
        }
    }

    // Save Menu
    const menusFile = `${__dirname}/.tmp/menus.json`;
    try {
        await fse.ensureFile(menusFile);
        await fse.writeJson(menusFile, menuData);
    } catch (err) {
        console.error(err)
    }
};

exports.onCreatePage = ({page, actions}, pluginOptions) => {
    const {createPage, deletePage} = actions;
    const {languages} = appConfig;

    if (
        page.path === "/404/" ||
        page.path === "/dev-404-page/" ||
        page.path === "/404.html" ||
        page.path === "/offline-plugin-app-shell-fallback/"
    ) {
        const pageInfo = languages.availableLanguages.map((lng) => {
            return {
                locale: lng,
                path: '/',
                title: '',
                type: 'und'
            }
        });

        const node = {
            langcode: languages.defaultLanguage,
            metatag_normalized: null
        };

        deletePage(page);
        createPage({
            ...page,
            context: {
                node,
                pageInfo
            },
        })
    }
};

exports.createPages = ({actions}, pluginOptions) => {
    const {createRedirect} = actions
    const {languages} = appConfig;
    const isEnvDevelopment = process.env.NODE_ENV === 'development';

    createRedirect({
        fromPath: `/`,
        toPath: `/${languages.defaultLanguage}`,
        redirectInBrowser: isEnvDevelopment,
        isPermanent: true,
        force: true,
        statusCode: 301,
    })
};

const createImageStyles = async () => {
    await astImageStyles.generateCombinedFile('image-styles.js',`${__dirname}/.tmp/imageStylesMapping.js`);
    const styles = esmRequire(`${__dirname}/.tmp/imageStylesMapping.js`).default;
    console.log(chalk.green("[\u2713] Prepare image styles"));

    for (const style of styles) {
        try {
            await api.getRest('app-image/create-style', {
                params: {
                    width: style.width,
                    height: style.height,
                }
            }, false);

            console.log(chalk.blue(`[\u25E6] ${style.name}`));
        } catch (error) {
            console.log(chalk.red(`[\u25E6] ${style.name}`));
            if (error.response) {
                console.error(error.response.data)

            }
        }
    }
};
