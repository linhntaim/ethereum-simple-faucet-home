export class LocaleHandler
{
    constructor(supportedLocales = []) {
        this.locale = null
        this.loadedLocales = []
        this.supportedLocales = supportedLocales
    }

    applyLocale(locale) {
        return this.locale = locale
    }

    setLocale(locale) {
        if (!this.supportedLocales.includes(locale)) {
            return Promise.resolve(this.locale)
        }
        if (this.locale === locale) {
            return Promise.resolve(locale)
        }
        if (this.loadedLocales.includes(locale)) {
            return Promise.resolve(this.applyLocale(locale))
        }
        return this.setUnloadedLocale(locale)
    }

    setUnloadedLocale(locale) {
        return Promise.resolve(this.applyLocale(locale))
    }
}
