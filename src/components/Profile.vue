<template>
    <div class="row" id="Profile">
        <div class="col-12">
            <headline icon="../../static/img/headline/book-svgrepo-com.svg" text="Profil"></headline>
        </div>
        <div class="col-12 content" v-html="cText"></div>
    </div>
</template>

<script>
  import { ucFirst } from '../Utils'
  import Headline from './Headline.vue'

  export default {
    name: 'profile',
    props: {
      text: {type: String, required: true}
    },
    components: {Headline},
    computed: {
      cText () {
        return ucFirst(this.text)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    #Profile {
        .content {
            @include FontLight;
            @include Lato;
        }
    }
</style>