<template>
    <div id="component-a">
        component a
        ...
    </div>
</template>

<script>
  export default {
    introduction: 'This is component A',
    description: 'Description for ComponentA',
    token: '<component-a text="Hello from ComponentA.vue" />',
    props: {
      sayWhat: {type: String, required: true, note: 'Say something'},
      object: {type: Number, required: true, note: 'Some object that you would like to pass'}
    }
  }
</script>

<style scoped lang="scss">

</style>