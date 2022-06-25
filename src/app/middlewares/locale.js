import {Middleware} from '@/app/support/router'

export class Locale extends Middleware
{
    async beforeEach(to, from, next) {
        this.app.$log.debug('middleware', 'locale.beforeEach')
        const locale = 'locale' in to.query
            ? to.query.locale
            : ('lang' in to.query ? to.query.lang : null)
        if (locale) {
            await this.app.$setLocale(locale)
        }
        next()
    }
}
