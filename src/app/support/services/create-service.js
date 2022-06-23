import {registerPropertyFactory} from '@/app/support/helpers'
import {RequestManager} from './request-manager'

export function createService(extend = {}) {
    return {
        install(app) {
            registerPropertyFactory(
                app.config.globalProperties,
                '$request',
                () => new RequestManager(app._instance.proxy).extend(extend),
            )
            registerPropertyFactory(
                app.config.globalProperties,
                '$service',
                props => ServiceClass => props.$singleton.make(ServiceClass),
            )
        },
    }
}
