const api = require('vactory-gatsby-api');
const fse = require('fs-extra');
const path = require('path');
const os = require('os');

exports.onPreBootstrap = async ({store, cache, actions, emitter, reporter, parentSpan}, pluginOptions) => {
    const apiConfig = pluginOptions.api;
    const languagesConfig = pluginOptions.languages;
    const widgetsConfig = pluginOptions.widgets;
    const {program} = store.getState();
    let i18nTranslations = {
        resources: {},
    };

    if (!widgetsConfig.pathToWidgetsMappingFile) {
        throw new Error(
            '[vactory-gatsby-core]: missing required option "pathToWidgetsMappingFile"',
        );
    }

    const translationActivity = reporter.activityTimer(`Download translations from Drupal`, {
        parentSpan,
    });

    // Init API.
    api.init(
        apiConfig.url,
        apiConfig.headers,
        languagesConfig.availableLanguages
    );

    try {
        const response = await api.getRest('_translations', {}, false);
        response.data.resources.forEach(({locale, translations}) => {
            i18nTranslations.resources[locale] = {
                translation: {},
            }
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

    // Save received options
    const optionsFile = `${__dirname}/.tmp/pluginOptions.json`;
    try {
        await fse.ensureFile(optionsFile);
        await fse.writeJson(optionsFile, pluginOptions);
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

    translationActivity.end()
};

exports.onCreatePage = ({page, actions}, pluginOptions) => {
    const {createPage, deletePage} = actions;
    const {languages} = pluginOptions;

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
            field_vactory_meta_tags: null
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
    const {languages} = pluginOptions;
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
