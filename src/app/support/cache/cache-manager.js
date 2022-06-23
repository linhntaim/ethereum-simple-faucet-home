import {Drivers} from '../drivers'
import {StorageCache} from './storage-cache'

export class CacheManager extends Drivers
{
    constructor(app) {
        super(app, 'cache', 'storage')
    }

    storage(storageDriver) {
        return storageDriver
            ? this.app.$storageManager.driver(storageDriver)
            : this.app.$storage
    }

    createStorage() {
        const options = this.options('storage')
        return new StorageCache(this.storage(options.storage), options)
    }
}
