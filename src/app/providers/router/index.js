import {createRouter} from '@/app/support/router'
import {env} from '@/config'
import {routes} from '@/routes'

export const router = createRouter(env, {
    routes,
})
