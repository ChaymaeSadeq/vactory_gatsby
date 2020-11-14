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
        `vactory-gatsby-webform`
    ]
};
