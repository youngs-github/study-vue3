<template>
    <header :class="$style.header">
        <nav-bar></nav-bar>
    </header>
    <body :class="$style.body">
        <router-view></router-view>
    </body>
    <footer :class="$style.footer">
        <foot-bar></foot-bar>
    </footer>
</template>

<script>
    import NavBar from './components/nav-bar.vue';
    import FootBar from './components/foot-bar.vue';

    export default {
        name: 'App',
        components: {
            NavBar,
            FootBar
        }
    };
</script>

<style lang="scss">
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
    }
    #app {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
    }
</style>

<style module lang="scss">
    .header {
        width: 100%;
        height: 64px;
        position: relative;
        box-sizing: border-box;
    }
    .body {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 100px;
    }
    .footer {
        width: 100%;
        height: 36px;
        position: relative;
        box-sizing: border-box;
        margin-top: -100px;
    }
</style>
