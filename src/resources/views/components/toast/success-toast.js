import {Toast} from './toast'

export class SuccessToast extends Toast
{
    constructor(message) {
        super(message, 'success')
    }
}