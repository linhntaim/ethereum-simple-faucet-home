export const log = {
    default: 'console',
    drivers: {
        console: {
            level: process.env.VUE_APP_LOG_LEVEL || 'debug',
        },
    },
}
