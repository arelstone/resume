<template>
    <div id="bar">
    </div>
</template>

<script>
  export default {
    name: 'bar',
    introduction: '',
    description: '',
    token: '',
    data () {
      return {}
    },
    props: {
      level: {type: Number | String, default: 0, required: true},
      text: {type: String, default: '', required: true}
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped lang="scss">

</style>