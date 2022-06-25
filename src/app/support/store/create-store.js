import {createStore as baseCreateStore} from 'vuex'
import {registerPropertyFactory, take} from '../helpers'

export function createStore(options = {}) {
    return take(baseCreateStore(options), store => {
        const install = store.install
        store.install = function (app, injectKey) {
            install.call(this, app, injectKey)

            registerPropertyFactory(this, 'app', () => app._instance.proxy)
        }
    })
}
