import {app} from '@/bootstrap/app'

export class Locale
{
    async beforeEach(to, from, next) {
        app.$log.debug('middleware', 'locale.beforeEach')
        const locale = 'locale' in to.query
            ? to.query.locale
            : ('lang' in to.query ? to.query.lang : null)
        if (locale) {
            await app.$setLocale(locale)
        }
        next()
    }
}
