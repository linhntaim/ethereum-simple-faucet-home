import {env} from './env'

export const log = {
    default: 'console',
    drivers: {
        console: {
            level: env.VUE_APP_LOG_LEVEL || 'debug',
        },
    },
}
