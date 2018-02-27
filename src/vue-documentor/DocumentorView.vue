<template>
    <div id="doc-view">
        <h1>doc view</h1>

        <doc-item v-for="component in components"
                  :key="component.name"
                  :component="component"/>
    </div>
</template>

<script>
  import DocItem from './components/DocItem'

  export default {
    name: 'documentor-view',
    introduction: '',
    description: '',
    token: '',
    props: {
      components: {type: Object, required: true}
    },
    components: {DocItem}
  }
</script>