<template>
    <div class="row" id="Profile">
        <div class="col-12">
            <headline :icon="Icon" :text="$t('Profile')"></headline>
        </div>
        <div class="col-12 content" v-html="cText"></div>
    </div>
</template>

<script>
  import { ucFirst } from '../Utils'
  import Headline from './Headline.vue'
  import Icon from '../assets/img/book-svgrepo-com.svg'

  export default {
    name: 'profile',
    introduction: 'Profile',
    description: 'A component for displaying a profile text',
    token: '<profile :text="Some long text string here"/>',
    props: {
      text: {type: String, required: true, note: 'Some text to display'}
    },
    components: {Headline},
    data () {
      return {
        Icon
      }
    },
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