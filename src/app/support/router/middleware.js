import {Maker} from '../maker'

export class Middleware extends Maker
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
