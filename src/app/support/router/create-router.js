import {createRouter as baseCreateRouter, createWebHistory} from 'vue-router'
import {take} from '../helpers'
import {Middlewares} from './middlewares'

export function createRouter(env, options = {}) {
    return take(
        baseCreateRouter(
            Object.assign(
                {
                    history: createWebHistory(env.BASE_URL),
                },
                options || {},
            ),
        ),
        router => {
            const install = router.install
            router.install = function (app) {
                install.call(this, app)

                let middlewares = null
                const createMiddlewares = app => middlewares ? middlewares : middlewares = new Middlewares(app)

                this.beforeEach(
                    (to, from, next) => createMiddlewares(app._instance.proxy).collect(to).beforeEach(to, from, next),
                )
                this.beforeResolve(
                    (to, from, next) => createMiddlewares(app._instance.proxy).beforeResolve(to, from, next),
                )
                this.afterEach(
                    (to, from) => createMiddlewares(app._instance.proxy).afterEach(to, from),
                )
            }
        },
    )
}
