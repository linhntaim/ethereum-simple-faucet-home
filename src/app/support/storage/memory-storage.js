import {Storage} from './storage'

export class MemoryStorage extends Storage
{
    constructor(encryptor) {
        super(encryptor)

        this.data = {}
    }

    // eslint-disable-next-line no-unused-vars
    putRaw(rawKey, rawValue, options = {}) {
        this.data[rawKey] = rawValue
        return this
    }

    hasRaw(rawKey) {
        return rawKey in this.data
    }

    getRaw(rawKey) {
        return this.data[rawKey]
    }

    removeRaw(rawKey) {
        delete this.data[rawKey]
        return this
    }
}
