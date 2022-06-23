export class ServiceError
{
    constructor(error) {
        this.error = error
        this.message = null
        this.messages = []

        this.parseError()
    }

    parseError() {

    }

    getMessage() {
        return this.message
    }

    getMessages() {
        return this.messages
    }
}
