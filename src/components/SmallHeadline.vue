<template>
    <h4 class="headline">&lt;{{headline}}&gt;</h4>
</template>

<script>
  import { ucFirst } from '../Utils'

  export default {
    name: 'SmallHeadline',
    props: {
      text: {type: Text | Number, required: true}
    },
    computed: {
      headline () {
        return ucFirst(this.text)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/_variables.scss';

    .headline {
        color: $headline-color;
        border-bottom: 1px solid $border-color;
        font-size: 16px;
        font-weight: 300;
    }
</style>