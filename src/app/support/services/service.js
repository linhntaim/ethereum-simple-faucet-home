import {Maker} from '../maker'

export class Service extends Maker
{
    constructor(app) {
        super(app)

        this.request = this.app.$request
    }

    requestDriver() {
        return null
    }

    requester() {
        return this.request.driver(this.requestDriver())
    }

    response(requested) {
        return requested
    }
}
