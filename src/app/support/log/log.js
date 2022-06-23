import {Driver} from '../driver'

export class Log extends Driver
{
    constructor(options = {}) {
        super(options)

        this.levels = {
            debug: 0,
            info: 1,
            notice: 2,
            warning: 3,
            error: 4,
            critical: 5,
            alert: 6,
            emergency: 7,
        }
    }

    levelValue(level) {
        return level in this.levels ? this.levels[level] : 0
    }

    higherOrEqualTo(level) {
        return this.levelValue(level) >= ('level' in this.options ? this.levelValue(this.options.level) : 0)
    }

    // eslint-disable-next-line no-unused-vars
    debug(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    info(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    notice(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    warning(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    error(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    critical(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    alert(namespace, message, ...data) {

    }

    // eslint-disable-next-line no-unused-vars
    emergency(namespace, message, ...data) {

    }
}
