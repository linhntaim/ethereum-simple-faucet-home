<template lang="pug">
.toast-container.p-3
    .toast.align-items-center.border-0.show(v-for="(toast, index) in toasts" :class="'text-bg-' + toast.type" role="alert" aria-live="assertive" aria-atomic="true")
        .d-flex
            .toast-body {{ toast.message }}
            button.btn-close.btn-close-white.me-2.m-auto(@click="onRemoveToastClick(index)" type="button" aria-label="Close")
</template>

<script>
export default {
    name: 'ToastContainer',
    data() {
        return {
            toasts: [],
            autoRemoveTimeout: null,
        }
    },
    mounted() {
        this.construct()
    },
    unmounted() {
        this.destruct()
    },
    methods: {
        construct() {
            this.$bus.on('toast', this.addToast)
        },
        destruct() {
            this.$bus.off('toast', this.addToast)
            if (this.autoRemoveTimeout != null) {
                clearTimeout(this.autoRemoveTimeout)
                this.autoRemoveTimeout = null
                this.toasts = []
            }
        },
        addToast(toast) {
            this.toasts.push(toast)
            if (this.autoRemoveTimeout == null) {
                this.autoRemoveToast()
            }
        },
        autoRemoveToast() {
            this.autoRemoveTimeout = setTimeout(() => {
                if (this.toasts.length) {
                    this.toasts.shift()
                    this.autoRemoveToast()
                }
                else {
                    this.stopAutoRemove()
                }
            }, 5000)
        },
        stopAutoRemove() {
            clearTimeout(this.autoRemoveTimeout)
            this.autoRemoveTimeout = null
        },
        onRemoveToastClick(index) {
            this.toasts.splice(index, 1)
            if (!this.toasts.length) {
                this.stopAutoRemove()
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.toast-container > :not(:last-child) {
    margin-bottom: 1rem;
}
</style>