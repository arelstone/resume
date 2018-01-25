<template>
    <div class="Headline">
        <h2>&lt;{{cText}} /&gt;
        </h2>
    </div>
</template>

<script>
  import * as Utils from '../Utils'

  export default {
    name: 'headline',
    description: 'A component to display a uniform headline. The text-prop fill be rendered with <, />-tags',
    token: '<headline text="Hello world" />',
    props: {
      text: {type: String, required: true, default: '', note: 'This prop will utilize the Utils.ucFirst-function'}
    },
    computed: {
      cText () {
        return Utils.ucFirst(this.text)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/variables';
    @import '../assets/style/fonts';

    .Headline {
        @include BioRhyme;
        h2 {
            @include FontThin;
            color: $headline-color;
            border-bottom: 1px solid $border-color;
        }
    }
</style>