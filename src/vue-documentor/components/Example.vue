<template>
    <div>
        <h1>example</h1>
        <pre>
            <code>{{token}}</code>
        </pre>
    </div>
</template>

<script>
  export default {
    name: 'example',
    introduction: '',
    description: '',
    token: '',
    props: {
      token: {type: String, required: true}
    }
  }
</script>

<style scoped lang="scss">

</style>