import {Drivers} from '../drivers'

export class RequestManager extends Drivers
{
    constructor(app) {
        super(app, 'services.request', 'default')
    }
}
