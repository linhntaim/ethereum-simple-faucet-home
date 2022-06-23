import {Maker} from '../maker'

export class Factory extends Maker
{
    constructor(app) {
        super(app)

        this.registered = {}
    }

    make(MakerClass, factory = null) {
        const classname = MakerClass.name
        if (!(classname in this.registered)) {
            this.registered[classname] = factory ? factory : app => new MakerClass(app)
        }
        return this.create(classname)
    }

    create(classname) {
        return this.registered[classname](this.app)
    }
}
