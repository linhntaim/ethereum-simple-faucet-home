import {Toast} from './toast'

export class DangerToast extends Toast
{
    constructor(message) {
        super(message, 'danger')
    }
}