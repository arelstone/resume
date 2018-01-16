<template>
    <div id="Headline">
        <h2>&lt;{{uc_first}} /&gt;</h2>
    </div>
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
    @import '../assets/style/variables';
    @import '../assets/style/fonts';

    #Headline {
        @include BioRhyme;
        h2 {
            @include FontThin;
            color: $headline-color;
            border-bottom: 1px solid $border-color;
        }
    }
</style>