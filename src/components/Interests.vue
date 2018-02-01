<template>
    <div id="interests">
        <headline text="Interesser"icon="../../static/img/headline/lamp-svgrepo-com.svg" />
        <div>{{interests}}</div>
    </div>
</template>

<script>
  import Headline from './Headline'

  export default {
    name: 'interests',
    introduction: '',
    description: '',
    token: '',
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