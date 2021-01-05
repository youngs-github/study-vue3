<template>
    <div :class="$style['foot-bar']">
        foot-bar
    </div>
</template>

<script>
    export default {
        name: 'FootBar'
    };
</script>

<style module lang="scss">
    .foot-bar {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }
</style>
