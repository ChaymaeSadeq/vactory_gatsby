import {CONFIG_LANGAUGES} from './src/config/language'
import {CONFIG_MANIFEST} from './src/config/manifest'
import {CONFIG_FONT} from './src/config/fonts'
import {CONFIG_MENUS} from './src/config/menus'
import {CONFIG_PROGRESS_BAR} from './src/config/progress-bar'
import {CONFIG_API_KEYS} from './src/config/api-keys'

export default {
    api: {
        url: process.env.GATSBY_API_URL,
        headers: {},
    },
    frontendURL: process.env.GATSBY_FRONTEND_URL,
    oidcClientId: process.env.GATSBY_OIDC_CLIENT_ID,
    enableAuth: true,
    keys: CONFIG_API_KEYS,
    languages: CONFIG_LANGAUGES,
    menus: CONFIG_MENUS,
    manifest: CONFIG_MANIFEST,
    font: CONFIG_FONT,
    progressBar: CONFIG_PROGRESS_BAR,
}
