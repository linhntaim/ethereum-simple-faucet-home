import {registerPropertyFactory} from '@/app/support/helpers'
import {CacheManager} from './cache-manager'

export function createCache(extend = {}) {
    return {
        install(app) {
            registerPropertyFactory(
                app.config.globalProperties,
                '$cacheManager',
                () => new CacheManager(app._instance.proxy).extend(extend),
            )
            registerPropertyFactory(
                app.config.globalProperties,
                '$cache',
                props => props.$cacheManager.driver(),
            )
        },
    }
}
