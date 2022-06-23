<template lang="pug">
h1 Clear site data
p Including session storage, local storage and cookies.
button(type="button" @click="onClearClick") Clear
pre(v-if="logs.length")
    code {{ lines }}
</template>

<script>
export default {
    name: 'ClearSiteData',
    data() {
        return {
            logs: [],
        }
    },
    computed: {
        lines() {
            return this.logs.join('\n')
        },
    },
    methods: {
        onClearClick() {
            this.logs = []
            this.$nextTick(() => {
                this.clearSessionStorage()
                this.clearLocalStorage()
                this.clearCookies()
            })
        },
        clearSessionStorage() {
            this.logs.push('Clearing session storage ...')
            window.sessionStorage.clear()
            this.logs.push('Session storage was cleared.')
        },
        clearLocalStorage() {
            this.logs.push('Clearing local storage ...')
            window.localStorage.clear()
            this.logs.push('Local storage was cleared.')
        },
        clearCookies() {
            this.logs.push('Clearing cookies ...')
            document.cookie.split(';').forEach(function (cookie) {
                document.cookie = cookie.replace(/^ +/, '')
                    .replace(/=.*/, '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/')
            })
            this.logs.push('Cookies were cleared.')
        },
    },
}
</script>
