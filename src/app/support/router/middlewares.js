import {Maker} from '../maker'

export class Middlewares extends Maker
{
    constructor(app) {
        super(app)

        this.middlewares = []
        this.middlewareObjects = {}
    }

    collect(to) {
        this.middlewares = []
        this.middlewareObjects = {}
        to.matched.forEach(route => {
            if ('middleware' in route.meta) {
                this.middlewares.push(...route.meta.middleware)
            }
        })
        return this
    }

    getMiddlewares() {
        return [...this.middlewares]
    }

    getMiddleware(MiddlewareClass) {
        return MiddlewareClass.name in this.middlewareObjects
            ? this.middlewareObjects[MiddlewareClass.name]
            : this.middlewareObjects[MiddlewareClass.name] = new MiddlewareClass(this.app)
    }

    before(method, to, from, next) {
        const middlewares = this.getMiddlewares()
        const handle = (route = null) => {
            if (route == null) {
                const MiddlewareClass = middlewares.shift()
                if (MiddlewareClass) {
                    const middleware = this.getMiddleware(MiddlewareClass)
                    if (method in middleware) {
                        middleware[method](to, from, handle)
                        return
                    }
                    handle()
                    return
                }
                next()
            }
            else {
                next(route)
            }
        }
        handle()
    }

    beforeEach(to, from, next) {
        this.before('beforeEach', to, from, next)
    }

    beforeResolve(to, from, next) {
        this.before('beforeResolve', to, from, next)
    }

    after(method, to, from) {
        const middlewares = this.getMiddlewares()
        const handle = () => {
            const MiddlewareClass = middlewares.shift()
            if (MiddlewareClass) {
                const middleware = this.getMiddleware(MiddlewareClass)
                if (method in middleware) {
                    middleware[method](to, from, handle)
                    return
                }
                handle()
            }
        }
        handle()
    }

    afterEach(to, from) {
        this.after('afterEach', to, from)
    }
}
