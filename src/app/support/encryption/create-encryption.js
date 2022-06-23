import {registerPropertyFactory} from '@/app/support/helpers'
import {Encryption} from './encryption'

export function createEncryption(extend = {}) {
    return {
        install(app) {
            registerPropertyFactory(
                app.config.globalProperties,
                '$encryption',
                () => new Encryption(app._instance.proxy).extend(extend),
            )
            registerPropertyFactory(
                app.config.globalProperties,
                '$encryptor',
                props => props.$encryption.driver(),
            )
        },
    }
}
