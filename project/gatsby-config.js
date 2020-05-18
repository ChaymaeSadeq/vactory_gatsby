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
        `vactory-gatsby-search`,
        `vactory-gatsby-map`,
        `vactory-gatsby-blog`,
        `vactory-gatsby-news`,
        `vactory-gatsby-press-kit`,
        `vactory-gatsby-press-release`,
        `vactory-gatsby-events`,
        `vactory-gatsby-publication`,
        `vactory-gatsby-academy`,
        `vactory-gatsby-job-ads`,
        `vactory-gatsby-annual-report`,
    ],
};
