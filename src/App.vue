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
    @import "../node_modules/font-awesome/css/font-awesome.min.css";
    @import "./assets/style/variables";
    @import "./assets/style/fonts";

    body {
        background: $bg-color;
        color: $text-color;
        @include Lato;
    }

    h1 {
        //font-family: 'Open Sans', sans-serif;
    }

    h2 {
        //font-family: 'Open Sans Condensed', sans-serif;
    }

    h5 {
        //font-family: 'Open Sans Condensed', sans-serif;
    }

    .hidden {
        display: none
    }
</style>
