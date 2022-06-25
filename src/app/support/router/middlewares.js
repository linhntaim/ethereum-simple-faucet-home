export class Middlewares
{
    constructor() {
        this.middlewares = []
    }

    collect(to) {
        this.middlewares = []
        to.matched.forEach(route => {
            if ('middleware' in route.meta) {
                this.middlewares.push(...route.meta.middleware)
            }
        })
        return this
    }

    before(method, to, from, next) {
        const handle = (route = null) => {
            if (route == null) {
                const MiddlewareClass = this.middlewares.shift()
                if (MiddlewareClass) {
                    const middleware = new MiddlewareClass()
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
        const handle = () => {
            const MiddlewareClass = this.middlewares.shift()
            if (MiddlewareClass) {
                const middleware = new MiddlewareClass()
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
