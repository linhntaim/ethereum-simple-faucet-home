import {createApp} from 'vue'
import {createStart} from '@/app/support/start'
import {providers} from '@/app/providers'
import {take, time} from '@/app/support/helpers'
import App from '@/resources/views/App'

export const vueStart = time()

export const app = take(createApp(App), function (app) {
    // register start plugin
    app.use(createStart(vueStart))
    // register plugins
    Object.keys(providers).forEach(key => app.use(providers[key]))
}).mount('#app')
