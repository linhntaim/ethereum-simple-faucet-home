import {modify} from '../helpers'

export class Settings
{
    constructor() {
        this.settings = {
            locale: null,
            country: null,
            timezone: null,
            currency: null,
            numberFormat: null,
            longDateFormat: null,
            shortDateFormat: null,
            longTimeFormat: null,
            shortTimeFormat: null,
        }
        this.applied()

        this.localeHandler = null
        this.applies = {}
    }

    applied() {
        this.appliedSettings = Object.assign({}, this.settings)
    }

    set(settings) {
        Object.keys(settings).forEach(key => {
            if (key in this.settings) {
                this.settings[key] = settings[key]
            }
        })
        return this
    }

    setLocale(locale) {
        this.settings.locale = locale
        return this
    }

    setLocaleHandler(localeHandler) {
        this.localeHandler = localeHandler
        return this
    }

    setLocaleApply(callback) {
        this.applies.locale = callback
        return this
    }

    setCommonApply(callback) {
        this.applies.common = callback
        return this
    }

    changes() {
        const changes = {}
        Object.keys(this.settings).forEach(
            key => changes[key] = this.settings[key] !== this.appliedSettings[key],
        )
        return changes
    }

    apply() {
        const changes = this.changes()
        return modify(this.localeHandler.setLocale(this.settings.locale), localePromise => {
            if (this.applies.locale) {
                return localePromise.then(async (locale) => {
                    await this.applies.locale(locale, changes.locale)
                    return locale
                })
            }
            return localePromise
        }).then(async () => {
            if (this.applies.common) {
                await this.applies.common(this.settings, changes)
            }
            this.applied()
            return this.settings
        })
    }
}
