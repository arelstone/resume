<template>
    <div id="interests">
        <headline text="Interesser"></headline>
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

</style>