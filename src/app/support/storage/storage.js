import {Driver} from '../driver'

export class Storage extends Driver
{
    constructor(encryptor, options = {}) {
        super(options)

        this.encryptor = encryptor
    }

    prefixKey(key) {
        return 'prefix' in this.options ? this.options.prefix + key : key
    }

    async put(key, value, options = {}) {
        return this.putRaw(this.prefixKey(key), await this.toRawValue(this.toValue(value, options), options), options)
    }

    // eslint-disable-next-line no-unused-vars
    putRaw(rawKey, rawValue, options = {}) {
        return this
    }

    // eslint-disable-next-line no-unused-vars
    toValue(value, options = {}) {
        return value
    }

    async toRawValue(value, options = {}) {
        let raw = {value, options}
        if (this.options.flatten) {
            raw = JSON.stringify(raw)
        }
        if (this.options.encrypt) {
            raw = await this.encryptor.encrypt(raw)
        }
        return raw
    }

    flash(key, value, options = {}) {
        options.flash = true
        return this.put(key, value, options)
    }

    // eslint-disable-next-line no-unused-vars
    has(key) {
        return this.hasRaw(this.prefixKey(key))
    }

    // eslint-disable-next-line no-unused-vars
    hasRaw(rawKey) {
        return false
    }

    async keep(key) {
        if (this.has(key)) {
            const got = await this.fromRawValue(key, this.getRaw(this.prefixKey(key)))
            const value = this.fromValue(key, got.value, got.options)
            got.options.keep = true
            await this.put(key, value, got.options)
        }
        return this
    }

    async get(key, def = null) {
        if (!this.has(key)) {
            return def
        }

        const got = await this.fromRawValue(key, this.getRaw(this.prefixKey(key)))
        return this.fromValue(key, got.value, got.options)
    }

    fromValue(key, value, options = {}) {
        if (options.expired) {
            if (new Date().getTime() > options.expired) {
                this.remove(key)
                return null
            }
        }
        if (options.flash) {
            if (options.keep) {
                delete options.keep
            }
            else {
                this.remove(key)
            }
        }
        return value
    }

    async fromRawValue(key, rawValue) {
        if (this.options.encrypt) {
            rawValue = await this.encryptor.decrypt(rawValue)
        }
        if (this.options.flatten) {
            rawValue = JSON.parse(rawValue)
        }
        return rawValue
    }

    // eslint-disable-next-line no-unused-vars
    getRaw(rawKey) {
        return null
    }

    // eslint-disable-next-line no-unused-vars
    remove(key) {
        return this.removeRaw(this.prefixKey(key))
    }

    // eslint-disable-next-line no-unused-vars
    removeRaw(rawKey) {
        return this
    }
}
