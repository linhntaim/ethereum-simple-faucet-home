<template lang="pug">
.not-found
    h1 404 - Not found
</template>

<script>
import {app} from '@/bootstrap/app'

export default {
    name: 'NotFound',
    beforeRouteEnter() { // cannot access `this`
        app.$log.debug('page', 'not-found.beforeRouteEnter')
    },
    beforeRouteUpdate() {
        this.$log.debug('page', 'not-found.beforeRouteUpdate')
    },
    beforeRouteLeave() {
        this.$log.debug('page', 'not-found.beforeRouteLeave')
    },
    beforeCreate() {
        this.$log.debug('page', 'not-found.beforeCreate')
    },
    created() {
        this.$log.debug('page', 'not-found.created')
    },
    beforeUpdate() {
        this.$log.debug('page', 'not-found.beforeUpdate')
    },
    updated() {
        this.$log.debug('page', 'not-found.updated')
    },
    beforeMount() {
        this.$log.debug('page', 'not-found.beforeMount//rendering')
    },
    mounted() {
        this.$log.debug('page', 'not-found.mounted//rendered')
    },
    beforeUnmount() {
        this.$log.debug('page', 'not-found.beforeUnmount')
    },
    unmounted() {
        this.$log.debug('page', 'not-found.unmounted')
    },
}
</script>
