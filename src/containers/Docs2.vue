<template>
    <div id="docs2">
        <documentor-view :components="{ComponentA,ComponentB}"/>
    </div>
</template>

<script>
  import DocumentorView from 'vue-documentor/DocumentorView'
  import ComponentA from 'vue-documentor/example/ComponentA'
  import ComponentB from 'vue-documentor/example/ComponentB'

  export default {
    name: 'docs2',
    introduction: '',
    description: '',
    token: '',
    data () {
      return {ComponentA, ComponentB}
    },
    components: {DocumentorView}
  }
</script>

<style scoped lang="scss">

</style>