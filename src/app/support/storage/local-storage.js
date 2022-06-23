import {Storage} from './storage'

export class LocalStorage extends Storage
{
    constructor(encryptor, options = {}) {
        super(encryptor, options)

        this.handler = window.localStorage
    }

    // eslint-disable-next-line no-unused-vars
    putRaw(rawKey, rawValue, options = {}) {
        this.handler.setItem(rawKey, rawValue)
        return this
    }

    hasRaw(rawKey) {
        return rawKey in this.handler
    }

    getRaw(rawKey) {
        return this.handler.getItem(rawKey)
    }

    removeRaw(rawKey) {
        this.handler.removeItem(rawKey)
        return this
    }
}
