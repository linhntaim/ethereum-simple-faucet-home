import {modify, str} from './helpers'

export class Drivers
{
    constructor(app, configKey, defaultDriver = null) {
        this.app = app
        this.config = app.$config
        this.configKey = configKey
        this.drivers = {}
        this.extended = {}
        this.withs = {}
        this.defaultDriver = defaultDriver
    }

    getConfig(key, def = null) {
        return this.config?.get(`${this.configKey}.${key}`, def) || def
    }

    options(driver) {
        return this.getConfig(`drivers.${driver}`, {})
    }

    getDefaultDriver() {
        return this.getConfig('default', this.defaultDriver)
    }

    extend(driver, callback) {
        switch (typeof driver) {
            case 'string':
                this.extended[driver] = callback
                break
            case 'object':
                Object.keys(driver).forEach(key => this.extended[key] = driver[key])
                break
        }
        return this
    }

    with(driver, callback, key = 'default') {
        if (!(driver in this.withs)) {
            this.withs[driver] = {key: callback}
        }
        else {
            this.withs[driver][key] = callback
        }
    }

    without(driver, key = 'default') {
        if (driver in this.withs) {
            delete this.withs[driver][key]
        }
    }

    driver(driver = null) {
        if (driver == null) {
            driver = this.getDefaultDriver()
        }
        return modify(
            driver in this.drivers
                ? this.drivers[driver]
                : (this.drivers[driver] = this.createDriver(driver)),
            driverInstance => {
                const withs = driver in this.withs ? this.withs[driver] : {}
                Object.keys(withs).forEach(key => {
                    driverInstance = withs[key](driverInstance)
                })
                return driverInstance
            },
        )
    }

    createDriver(driver) {
        return modify(this.createCustomDriver(driver), createdDriver => {
            return createdDriver ? createdDriver : modify(this.createExtendedDriver(driver), createdDriver => {
                return createdDriver ? createdDriver : this.createDefaultDriver()
            })
        })
    }

    createCustomDriver(driver) {
        const method = 'create' + str.studly(driver)
        if (method in this) {
            return this[method]()
        }
        return null
    }

    createExtendedDriver(driver) {
        return driver in this.extended ? this.extended[driver]() : null
    }

    /**
     *
     * @returns {*}
     */
    createDefaultDriver() {
        throw 'Driver does not exist.'
    }
}
