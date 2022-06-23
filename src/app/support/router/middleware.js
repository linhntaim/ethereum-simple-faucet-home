export class Middleware
{
    beforeEach(to, from, next) {
        next()
    }

    beforeResolve(to, from, next) {
        next()
    }

    // eslint-disable-next-line no-unused-vars
    afterEach(to, from) {
    }
}
