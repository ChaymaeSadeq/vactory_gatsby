const api = require('vactory-gatsby-api');
const fse = require('fs-extra');
const path = require('path');

exports.onPreBootstrap = async ({cache, actions, emitter, reporter, parentSpan}, pluginOptions) => {
    const apiConfig = pluginOptions.api;
    const languagesConfig = pluginOptions.languages;
    let i18nTranslations = {
        resources: {},
    };
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
