const React = require("react")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    let { createLinkInHead } = pluginOptions

    if (!createLinkInHead) {
        return
    }

    setHeadComponents([
        <link
            key={`vactory-sitemap`}
            rel="sitemap"
            type="application/xml"
            href="/sitemap.xml"
        />,
    ])
}
