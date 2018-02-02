<template>
    <div id="interests">
        <headline text="Interesser" :icon="Icon"/>
        <div>{{interests}}</div>
    </div>
</template>

<script>
  import Headline from './Headline'
  import Icon from '../assets/img/lamp-svgrepo-com.svg'

  export default {
    name: 'interests',
    introduction: '',
    description: '',
    token: '',
    data () {
      return {Icon}
    },
    props: {
      interests: {type: String, requried: true, default: ''}
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