<template>
    <div id="interests">
        <headline text="Interesser" :icon="Icon"/>
        <div class="content">{{Utils.ucFirst(interests)}}</div>
    </div>
</template>

<script>
  import * as Utils from '../Utils'
  import Headline from './Headline'
  import Icon from '../assets/img/lamp-svgrepo-com.svg'

  export default {
    name: 'interests',
    introduction: 'A section for displaying spoken interests',
    description: 'A component for displaying spoken interests',
    token: '<interests :interests="[{}]"/>',
    data () {
      return {Icon, Utils}
    },
    props: {
      interests: {type: String, requried: true, default: '', note: 'A string of text'}
    },
    components: {Headline}
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    #interests {
        @include FontLight;
        @include Lato;
    }
</style>