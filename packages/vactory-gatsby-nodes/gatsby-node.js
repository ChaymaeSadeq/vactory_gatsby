const api = require('vactory-gatsby-api');
const path = require("path");
const chalk = require("chalk");
const fse = require("fs-extra");
const _ = require('lodash');
const viewsConfigurationFile = `${__dirname}/.tmp/viewsConfig.json`;

exports.onPreBootstrap = async () => {
    try {
        await fse.ensureFile(viewsConfigurationFile);
        await fse.writeJson(viewsConfigurationFile, {
            views: [],
        })
    } catch (err) {
        console.error(err)
    }
};

exports.createPages = async ({store, actions: {createPage}}, {
    title,
    resource,
    params,
    template,
    amp = {
        enabled: false,
        template: null
    },
    nodeProcessor = null,
    addContext = null,
}) => {
    console.log(chalk.green("[\u2713] " + title));

    // Create a mapping file in order to get alias by view_id field.
    // search > /fr/recherche + /ar/search
    let viewsData = await fse.readJson(viewsConfigurationFile);
    const view_id = _.get(params, 'filter.field_view_id');

    // Preview config.
    const previewEnabled = true;
    const previewTemplate = path.resolve(__dirname, `src/templates/preview.js`);

    // @todo: benchmark this, maybe add cache to it.
    const {breadcrumbs} = await fse.readJson(`${__dirname}/../vactory-gatsby-core/.tmp/breadcrumbs.json`);

    let response = [];
    try {
        response = await api.getAll(resource, params);
    } catch (error) {
        console.error(error);
        return;
    }

    const flattenNodes = [].concat(...response);

    // Merge nodes with translations.
    let mergedNodes = [];
    flattenNodes.forEach(node => {
        if (typeof mergedNodes[node.drupal_internal__nid] === "undefined") {
            mergedNodes[node.drupal_internal__nid] = []
        }

        mergedNodes[node.drupal_internal__nid].push(node)
    });

    // Clean up the array.
    // we end up with empty array items since we relay on "drupal_internal__nid"
    // as an index for the array.
    const nodes = mergedNodes.filter(function (el) {
        return el != null
    });

    for (let i18nNodes of nodes) {
        // This is used  mostly by the switch language dropdown.
        // It needs to know the URL to the translated node.
        const pageInfo = i18nNodes.map(nodeLocale => {
            return {
                locale: nodeLocale.path.langcode,
                path: nodeLocale.path.alias,
                title: nodeLocale.title,
                type: nodeLocale.type,
            }
        });

        for (let node of i18nNodes) {
            let extraContext = {};
            const nodeBreadcrumb = breadcrumbs.find(link => link.path === node.path.alias);
            const nodeBreadcrumbItems = nodeBreadcrumb ? nodeBreadcrumb.items : [];

            // Override langcode.
            node.langcode = node.path.langcode;

            // Hook into nodes.
            if (nodeProcessor) {
                node = await nodeProcessor(node);
            }

            // Log.
            console.log(
                `${chalk.blue("[\u25E6]")} ${chalk.blue(
                    node.path.alias,
                )}`,
            );

            // Hooks into context.
            if (addContext) {
                extraContext = await addContext(node);
            }

            if (view_id) {
                viewsData.views.push({
                    id: view_id,
                    alias: node.path.alias,
                    langcode: node.langcode,
                })
            }

            createPage({
                path: node.path.alias,
                component: template,
                context: {
                    node: node,
                    breadcrumb: nodeBreadcrumbItems,
                    pageInfo,
                    ...extraContext,
                },
            });

            // AMP.
            if (amp.enabled) {
                createPage({
                    path: path.join(node.path.alias, "/amp/"),
                    component: amp.template,
                    context: {
                        node: node,
                        pageInfo,
                        ...extraContext,
                    },
                });
            }

            // Preview.
            if (previewEnabled) {
                // Get package name.
                const relativePath = path.relative(path.join(__dirname, '..'), template);
                const parts = relativePath.split(path.sep);
                let packageName = parts[0];
                const previewFilePath = path.format({
                    dir: `${path.resolve(path.join(__dirname, '..'))}/${packageName}/src/components`,
                    base: 'preview.container.js'
                });

                // If no preview file is found.
                // Fallback to default preview file.
                const previewFileExist = await fse.exists(previewFilePath);
                if (!previewFileExist) {
                    packageName = 'vactory-gatsby-nodes';
                    throw new Error(
                        `[${packageName}] Preview file not found at ${previewFilePath}`
                    )
                }

                createPage({
                    path: path.join(node.path.alias, "/__preview/"),
                    component: previewTemplate,
                    context: {
                        node: node,
                        pageInfo,
                        ...extraContext,
                        previewConfig: {
                            node_type: resource.split("/").pop(),
                            resource,
                            params,
                            packageName,
                        }
                    },
                });
            }
        }

    }

    // Save views config.
    await fse.writeJson(viewsConfigurationFile, viewsData)
};
