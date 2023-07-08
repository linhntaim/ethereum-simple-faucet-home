<template lang="pug">
header.p-3.text-bg-dark
    .container
        .d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start
            a.d-flex.align-items-center.mb-2.mb-lg-0.me-lg-auto.text-white.text-decoration-none.text-center(href='/')
                span.fs-4 {{ appName }}
            ul.nav.col-12.col-lg-auto.justify-content-center
                li(v-for="navItem in navItems")
                    router-link.nav-link.px-2(:to="navItem.to" :class="$route.name == navItem.to.name ? 'text-secondary' : 'text-white'") {{ navItem.title }}
main
    .container
        router-view
toast-container.fixed-bottom
</template>

<script>
import ToastContainer from '@/resources/views/components/toast/ToastContainer'

export default {
    // eslint-disable-next-line
    name: 'Base',
    components: {ToastContainer},
    data() {
        return {
            appName: this.$config.env.VUE_APP_NAME,
            navItems: [
                {
                    title: 'Home',
                    to: {
                        name: 'root',
                    },
                },
                {
                    title: 'About',
                    to: {
                        name: 'about',
                    },
                },
            ],
        }
    },
}
</script>