import {CONFIG_LANGAUGES} from './src/config/language'
import {CONFIG_MANIFEST} from './src/config/manifest'
import {CONFIG_FONT} from './src/config/fonts'
import {CONFIG_MENUS} from './src/config/menus'
import {CONFIG_PROGRESS_BAR} from './src/config/progress-bar'

export default {
    api: {
        url: process.env.GATSBY_API_URL,
        headers: {
            Authorization: process.env.GATSBY_API_AUTHORIZATION
        },
    },
    frontendURL: process.env.GATSBY_FRONTEND_URL,
    languages: CONFIG_LANGAUGES,
    menus: CONFIG_MENUS,
    manifest: CONFIG_MANIFEST,
    font: CONFIG_FONT,
    progressBar: CONFIG_PROGRESS_BAR,
}
