import {env} from './env'

export const localization = {
    locale: {
        default: env.VUE_APP_LOCALE || 'en',
        fallback: env.VUE_APP_FALLBACK_LOCALE || 'en',

        supported: ['en', 'vi'],
    },
}
