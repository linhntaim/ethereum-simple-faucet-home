import {createRouter as baseCreateRouter, createWebHistory} from 'vue-router'
import {take} from '../helpers'
import {Middlewares} from './middlewares'

const middlewares = new Middlewares()

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
            router.beforeEach(
                (to, from, next) => middlewares.collect(to).beforeEach(to, from, next),
            )
            router.beforeResolve(
                (to, from, next) => middlewares.collect(to).beforeResolve(to, from, next),
            )
            router.afterEach(
                (to, from) => middlewares.collect(to).afterEach(to, from),
            )
        },
    )
}
