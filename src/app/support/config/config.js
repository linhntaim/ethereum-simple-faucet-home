import {dataGet} from '../helpers'

export class Config
{
    constructor(configs) {
        Object.keys(configs).forEach(key => this[key] = configs[key])
    }

    get(key, def = null) {
        return dataGet(this, key, def)
    }
}
