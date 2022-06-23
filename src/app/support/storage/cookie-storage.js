import {Storage} from './storage'
import Cookies from 'js-cookie'

export class CookieStorage extends Storage
{
    constructor(encryptor, options = {}) {
        super(encryptor, options)

        this.options.flatten = true
    }

    putRaw(rawKey, rawValue, options = {}) {
        const attributes = {
            secure: /^https/.test(window.location.origin),
            sameSite: 'lax',
        }
        if (options.expired) {
            attributes.expires = new Date(options.expired)
        }
        if ('expires' in options) {
            attributes.expires = options.expires
        }
        if (!('expires' in attributes)) {
            attributes.expires = new Date(new Date().getTime() + 5 * 365 * 24 * 3600 * 1000) // 5 years
        }
        if ('path' in options) {
            attributes.path = options.path
        }
        if ('domain' in options) {
            attributes.domain = options.domain
        }
        if ('secure' in options) {
            attributes.secure = options.secure
        }
        if ('sameSite' in options) {
            attributes.sameSite = options.sameSite
        }
        Cookies.set(rawKey, rawValue, attributes)
        return this
    }

    hasRaw(rawKey) {
        return (cookies => cookies.length
            ? cookies.some(cookie => rawKey === decodeURIComponent(cookie.split('=')[0]))
            : false)(document.cookie ? document.cookie.split('; ') : [])
    }

    getRaw(rawKey) {
        return Cookies.get(rawKey)
    }

    removeRaw(rawKey) {
        Cookies.remove(rawKey)
        return this
    }
}
