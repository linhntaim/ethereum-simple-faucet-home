import {Drivers} from '../drivers'
import {LocalStorage} from './local-storage'
import {CookieStorage} from './cookie-storage'

export class StorageManager extends Drivers
{
    constructor(app) {
        super(app, 'storage', 'local')
    }

    encryptor(encryptorDriver) {
        return encryptorDriver
            ? this.app.$encryption.driver(encryptorDriver)
            : this.app.$encryptor
    }

    createLocal() {
        const options = this.options('local')
        return new LocalStorage(this.encryptor(options.encryptor), options)
    }

    createCookie() {
        const options = this.options('cookie')
        return new CookieStorage(this.encryptor(options.encryptor), options)
    }
}
