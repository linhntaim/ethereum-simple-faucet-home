import {registerPropertyFactory} from '@/app/support/helpers'
import mitt from 'mitt'

export function createBus() {
    return {
        install(app) {
            registerPropertyFactory(
                app.config.globalProperties,
                '$bus',
                () => mitt(),
            )
        },
    }
}