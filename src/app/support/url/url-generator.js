import {Maker} from '../maker'

export class UrlGenerator extends Maker
{
    constructor(app) {
        super(app)

        this.url = this.app.$config.app.url
        this.router = this.app.$router
    }

    concat(...args) {
        args.unshift(this.url)
        return args.join('/')
    }

    to(path = '') {
        return this.concat(path)
    }

    route(location) {
        return this.concat(this.router.resolve(location).path.substr(1))
    }
}
