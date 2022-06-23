<template lang="pug">
.home
    img(alt="Vue logo" src="../../assets/logo.png")
    hello-world(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/resources/views/components/HelloWorld.vue'
import {app} from '@/bootstrap/app'

export default {
    // eslint-disable-next-line
    name: 'Home',
    components: {
        HelloWorld,
    },
    beforeRouteEnter() { // cannot access `this`
        app.$log.debug('page', 'home.beforeRouteEnter')
    },
    beforeRouteUpdate() {
        this.$log.debug('page', 'home.beforeRouteUpdate')
    },
    beforeRouteLeave() {
        this.$log.debug('page', 'home.beforeRouteLeave')
    },
    beforeCreate() {
        this.$log.debug('page', 'home.beforeCreate')
    },
    created() {
        this.$log.debug('page', 'home.created')
    },
    beforeUpdate() {
        this.$log.debug('page', 'home.beforeUpdate')
    },
    updated() {
        this.$log.debug('page', 'home.updated')
    },
    beforeMount() {
        this.$log.debug('page', 'home.beforeMount//rendering')
    },
    mounted() {
        this.$log.debug('page', 'home.mounted//rendered')
    },
    beforeUnmount() {
        this.$log.debug('page', 'home.beforeUnmount')
    },
    unmounted() {
        this.$log.debug('page', 'home.unmounted')
    },
}
</script>
