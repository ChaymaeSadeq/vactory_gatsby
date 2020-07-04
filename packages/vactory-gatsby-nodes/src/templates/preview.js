import React, {useEffect, useState} from "react"
import Api from "vactory-gatsby-api";
import {Toast} from 'vactory-gatsby-ui';
import {useTranslation} from "react-i18next"

const PreviewApp = ({pageContext: {node, previewConfig}}) => {
    const {t} = useTranslation();
    const nid = node.drupal_internal__nid;
    const language = node.langcode;

    const {packageName, resource, params} = previewConfig;
    const [view, setView] = useState(null);

    useEffect(() => {
        async function loadData() {
            const {data} = await Api.getResponse(resource, {
                filter: {
                    "drupal_internal__nid": nid,
                },
                ...params,
            }, language);

            return new Promise(function (resolve, reject) {
                resolve(data[0])
            });
        }

        async function loadView() {
            const Node = await loadData();
            // Webpack can't accept a full string literal.
            // We must indicate where he should be looking for the file.
            const LazyView = await import(`../../../${packageName}/src/components/preview.container.js`);
            const View = LazyView.default;
            const PageContext = {
                node: Node,
            };

            return (
                <View pageContext={PageContext}/>
            );
        }

        const {hide} = Toast.loading(t("Chargement des données..."), {hideAfter: 0});
        loadView().then(v => {
            setView(v);
            hide();
        });
    }, [packageName, resource, params, language, nid]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!view) {
        return null;
    }

    return (
        <React.Suspense fallback={t("Chargement de vue...")}>
            <div className='container'>{view}</div>
        </React.Suspense>
    )
};

export default PreviewApp
