import {Driver} from '../driver'

export class Cache extends Driver
{
    // eslint-disable-next-line no-unused-vars
    set(key, data, expiresIn = null) {
        return this
    }

    get(key, def = null) {
        return def
    }

    // eslint-disable-next-line no-unused-vars
    remove(key) {
        return this
    }
}
