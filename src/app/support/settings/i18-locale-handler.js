import {createI18n} from 'vue-i18n'
import {take} from '../helpers'
import {LocaleHandler} from './locale-handler'

export class I18LocaleHandler extends LocaleHandler
{
    createI18Provider(options = {}) {
        return take(
            createI18n(
                take(
                    Object.assign(
                        {
                            globalInjection: true,
                            legacy: false,
                            locale: process.env.VUE_APP_I18N_LOCALE || 'en',
                            fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
                        },
                        options || {},
                    ),
                    options => {
                        this.loadedLocales = Object.keys(options.messages || {})
                        this.locale = this.loadedLocales.length ? options.locale : null
                    },
                ),
            ),
            i18n => this.i18n = i18n.global,
        )
    }

    applyLocale(locale) {
        this.i18n.locale.value = locale
        return super.applyLocale(locale)
    }

    setUnloadedLocale(locale) {
        return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${locale}.js`)
            .then(messages => {
                this.i18n.setLocaleMessage(locale, messages.default)
                this.loadedLocales.push(locale)
                return this.applyLocale(locale)
            })
            .catch(() => Promise.resolve(this.locale))
    }
}
