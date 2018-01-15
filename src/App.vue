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
    @import "./assets/style/variables";
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans:300,400,700');
    body {
        background: $bg-color;
        color: $text-color;
        font-family: 'Open Sans', sans-serif;
    }
    h1 {
        font-family: 'Open Sans', sans-serif;
    }
    h2 {
        font-family: 'Open Sans Condensed', sans-serif;
    }
    h5 {
        font-family: 'Open Sans Condensed', sans-serif;
    }
</style>
