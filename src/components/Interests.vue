<template>
    <div id="interests">
        <headline :text="$t('Interests')" :icon="Icon"/>
        <div class="content">{{interests}}</div>
    </div>
</template>

<script>
  import Headline from './Headline'
  import Icon from '../assets/img/lamp-svgrepo-com.svg'

  export default {
    name: 'interests',
    introduction: 'A section for displaying spoken interests',
    description: 'A component for displaying spoken interests',
    token: '<interests :interests="[{}]"/>',
    data () {
      return {Icon}
    },
    props: {
      interests: {type: String, required: true, default: '', note: 'A string of text'}
    },
    components: {Headline}
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    #interests {
        @include FontLight;
        @include Lato;
        padding: 20px 0 75px;
    }
</style>