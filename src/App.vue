<template>
    <div id="app" class="container">
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

    body {
        padding: 50px 0;
        background: $bg-color;
        color: $text-color;
        @include Lato;
    }

    .hidden {
        display: none
    }
</style>
