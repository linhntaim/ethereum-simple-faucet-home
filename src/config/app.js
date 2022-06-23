import {trim} from 'locutus/php/strings'

export const app = {
    id: process.env.VUE_APP_ID || 'starter',
    name: process.env.VUE_APP_NAME || 'Starter',
    url: window.location.origin + trim(process.env.BASE_URL, '/'),

    routes: {
        root: {
            name: 'root',
        },
    },
}
