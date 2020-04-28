const api = require('vactory-gatsby-api');
const path = require("path");
const chalk = require("chalk");
const fse = require("fs-extra");

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

    const {breadcrumbs} = await fse.readJson(`${__dirname}/../vactory-gatsby-core/.tmp/breadcrumbs.json`);

    const response = await api.getAll(resource, params);
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

            // Log.
            console.log(
                `${chalk.blue("[\u25E6]")} ${chalk.blue(
                    node.path.alias,
                )}`,
            );

            // Hook into nodes.
            if (nodeProcessor) {
                node = await nodeProcessor(node);
            }

            // Hooks into context.
            if (addContext) {
                extraContext = await addContext(node);
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
                    path: path.join(pagePath, "/amp/"),
                    component: amp.template,
                    context: {
                        node: node,
                        pageInfo,
                        ...extraContext,
                    },
                });
            }
        }

    }
};
