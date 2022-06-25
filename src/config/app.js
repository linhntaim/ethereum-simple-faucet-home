import {env} from './env'
import {trim} from 'locutus/php/strings'

export const app = {
    id: env.VUE_APP_ID || 'starter',
    name: env.VUE_APP_NAME || 'Starter',
    url: window.location.origin + trim(env.BASE_URL, '/'),

    routes: {
        root: {
            name: 'root',
        },
    },
}
