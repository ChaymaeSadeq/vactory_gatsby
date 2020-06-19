const api = require('vactory-gatsby-api');
const fse = require('fs-extra');
const path = require('path');
const os = require('os');
const chalk = require("chalk");
const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;

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
    const widgetsConfig = appConfig.widgets;
    const imageStyles = appConfig.images.styles || [];
    const {program} = store.getState();
    let i18nTranslations = {
        resources: {},
    };

    if (!widgetsConfig.pathToWidgetsMappingFile) {
        throw new Error(
            '[vactory-gatsby-core]: missing required option "pathToWidgetsMappingFile"',
        );
    }

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
    await createImageStyles(imageStyles);

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
    // The reason why we load these in core is that custom projects only include core plugin.
    // They do not call the ui plugin.
    const customWidgetMappingFile = path.isAbsolute(widgetsConfig.pathToWidgetsMappingFile)
        ? widgetsConfig.pathToWidgetsMappingFile
        : path.join(program.directory, widgetsConfig.pathToWidgetsMappingFile);

    const customWidgetAmpMappingFile = path.isAbsolute(widgetsConfig.pathToAMPWidgetsMappingFile)
        ? widgetsConfig.pathToAMPWidgetsMappingFile
        : path.join(program.directory, widgetsConfig.pathToAMPWidgetsMappingFile);

    const customWidgetFile = `${__dirname}/.tmp/widgetsMapping.js`;
    const customWidgetAMPFile = `${__dirname}/.tmp/widgetsMapping.amp.js`;

    let customWidgetModuleContent = `export {default as WidgetsMapping} from "${customWidgetMappingFile}"`;
    if (os.platform() === 'win32') {
        customWidgetModuleContent = customWidgetModuleContent.split('\\').join('\\\\');
    }

    let customWidgetAmpModuleContent = `export {default as WidgetsAmpMapping} from "${customWidgetAmpMappingFile}"`;
    if (os.platform() === 'win32') {
        customWidgetAmpModuleContent = customWidgetAmpModuleContent.split('\\').join('\\\\');
    }

    try {
        await fse.ensureFile(customWidgetFile);
        await fse.writeFileSync(customWidgetFile, customWidgetModuleContent);
    } catch (err) {
        console.error(err)
    }
    ;

    try {
        await fse.ensureFile(customWidgetAMPFile);
        await fse.writeFileSync(customWidgetAMPFile, customWidgetAmpModuleContent);
    } catch (err) {
        console.error(err)
    }
    ;


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

const createImageStyles = async (styles) => {
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
        }
        catch (error) {
            console.log(chalk.red(`[\u25E6] ${style.name}`));
            if (error.response) {
                console.error(error.response.data)

            }
        }
    }
};
