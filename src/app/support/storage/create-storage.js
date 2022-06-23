import {registerPropertyFactory} from '@/app/support/helpers'
import {StorageManager} from './storage-manager'

export function createStorage(extend = {}) {
    return {
        install(app) {
            registerPropertyFactory(
                app.config.globalProperties,
                '$storageManager',
                () => new StorageManager(app._instance.proxy).extend(extend),
            )
            registerPropertyFactory(
                app.config.globalProperties,
                '$storage',
                props => props.$storageManager.driver(),
            )
            registerPropertyFactory(
                app.config.globalProperties,
                '$cookie',
                props => props.$storageManager.driver('cookie'),
            )
        },
    }
}
