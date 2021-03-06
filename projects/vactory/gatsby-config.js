// Initialize dotenv.
const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
    path: `.env.${activeEnv}`
});

module.exports = {
    plugins: [
        `vactory-gatsby-core`,
        // `vactory-gatsby-nextpre`,
        `vactory-gatsby-search`,
        // `vactory-gatsby-forum`,
        // `vactory-gatsby-map`,
        // `vactory-gatsby-blog`,
        // `vactory-gatsby-news`,
        // `vactory-gatsby-press-kit`,
        // `vactory-gatsby-press-release`,
        // `vactory-gatsby-events`,
        // `vactory-gatsby-publication`,
        // `vactory-gatsby-academy`,
        // `vactory-gatsby-job-ads`,
        // `vactory-gatsby-annual-report`,
        // `vactory-gatsby-gouvernance`,
        // `vactory-gatsby-glossary`,
        // `vactory-gatsby-tender`,
        // `vactory-gatsby-faq`,
        `vactory-gatsby-redirection`,
        `vactory-gatsby-tour`,
    ],
};
