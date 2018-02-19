<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
    @import "~bootstrap-4-grid";
    @import "./assets/style/style";
    @import "./assets/style/palettes/palette5";

    body {
        padding: 0;
        margin: 0;
        background: $bg-color;
        color: $text-color;
        @include Lato;
    }

    .hidden {
        display: none
    }
</style>
