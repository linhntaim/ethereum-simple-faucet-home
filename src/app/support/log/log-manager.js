import {Drivers} from '../drivers'
import {ConsoleLog} from './console-log'

export class LogManager extends Drivers
{
    constructor(app) {
        super(app, 'log', 'console')
    }

    createConsole() {
        return new ConsoleLog(this.options('console'))
    }
}
