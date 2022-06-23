const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    configureWebpack: {
        resolve: {
            fallback: {
                crypto: false, // require.resolve('crypto-browserify') // need to install
            },
        },
    },

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'lang',
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true,
        },
    },
})
