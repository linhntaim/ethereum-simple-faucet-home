<template lang="pug">
nav
    router-link(:to="{name: 'root'}") Home
    | &nbsp;|&nbsp;
    router-link(:to="{name: 'about'}") About
router-view
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Base',
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
