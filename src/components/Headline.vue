<template>
    <h2 class="headline">&lt;{{uc_first}}&gt;</h2>
</template>

<script>
  export default {
    name: 'Headline',
    props: {
      text: {type: Text | Number, required: true}
    },
    computed: {
      uc_first () {
        return this.text.slice(0, 1).toUpperCase() + this.text.slice(1)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/_variables.scss';

    h2.headline {
        color: $headline-color;
        border-bottom: 1px solid $border-color;
    }
</style>