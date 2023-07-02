import {registerPropertyFactory} from '@/app/support/helpers'
import {Ethereum} from './ethereum'

export function createEthereum() {
    return {
        install(app) {
            registerPropertyFactory(
                app.config.globalProperties,
                '$ethereum',
                () => new Ethereum(),
            )
        },
    }
}
