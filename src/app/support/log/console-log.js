import {Log} from './log'

export class ConsoleLog extends Log
{
    debug(namespace, message, ...data) {
        if (this.higherOrEqualTo('debug')) {
            // eslint-disable-next-line
            console.debug(namespace + ':', message, ...data)
        }
    }

    info(namespace, message, ...data) {
        if (this.higherOrEqualTo('info')) {
            // eslint-disable-next-line
            console.info(namespace + ':', message, ...data)
        }
    }

    notice(namespace, message, ...data) {
        if (this.higherOrEqualTo('notice')) {
            // eslint-disable-next-line
            console.warn(namespace + ':', message, ...data)
        }
    }

    warning(namespace, message, ...data) {
        if (this.higherOrEqualTo('warning')) {
            // eslint-disable-next-line
            console.warn(namespace + ':', message, ...data)
        }
    }

    error(namespace, message, ...data) {
        if (this.higherOrEqualTo('error')) {
            // eslint-disable-next-line
            console.error(namespace + ':', message, ...data)
        }
    }

    critical(namespace, message, ...data) {
        if (this.higherOrEqualTo('critical')) {
            // eslint-disable-next-line
            console.error(namespace + ':', message, ...data)
        }
    }

    alert(namespace, message, ...data) {
        if (this.higherOrEqualTo('alert')) {
            // eslint-disable-next-line
            console.error(namespace + ':', message, ...data)
        }
    }

    emergency(namespace, message, ...data) {
        if (this.higherOrEqualTo('emergency')) {
            // eslint-disable-next-line
            console.error(namespace + ':', message, ...data)
        }
    }
}
