import {localization as config} from '@/config'
import {registerPropertyFactory} from '@/app/support/helpers'
import {I18LocaleHandler, Settings} from '@/app/support/settings'

const localeHandler = new I18LocaleHandler(config.locale.supported)
const settings = new Settings()
    .setLocaleHandler(localeHandler)

export const i18n = localeHandler.createI18Provider({
    locale: config.locale.default,
    fallbackLocale: config.locale.fallback,
})
export const localization = {
    install(app) {
        registerPropertyFactory(app.config.globalProperties, '$settings', function (props) {
            settings
                .setLocaleApply((locale, changed) => {
                    if (changed) {
                        document.querySelector('html').setAttribute('lang', locale)
                        props.$log.debug('locale', 'applied', locale)
                    }
                    else {
                        props.$log.debug('locale', 'no need to apply')
                    }
                })
                .setCommonApply(async (settings, changes) => {
                    if (Object.keys(changes).some(key => changes[key])) {
                        await props.$cookie.put('settings', (() => {
                            const values = {}
                            Object.keys(settings).forEach(key => settings[key] && (values[key] = settings[key]))
                            return values
                        })())
                        props.$log.debug('settings', 'applied', settings)
                    }
                    else {
                        props.$log.debug('settings', 'no need to apply')
                    }
                })
            return settings
        })
        registerPropertyFactory(app.config.globalProperties, '$setLocale', function (props) {
            return locale => {
                props.$log.debug('locale', 'applying', locale)
                return props.$settings.setLocale(locale).apply()
            }
        })
    },
}
