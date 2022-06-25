import {createRouter} from '@/app/support/router'
import {routes} from '@/routes'
import {env} from '@/config'

export const router = createRouter(env, {
    routes,
})
