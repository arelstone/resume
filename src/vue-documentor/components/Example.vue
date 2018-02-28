<template>
    <div>
        <h1>Example</h1>
        <pre>
            <code class="html">{{token}}</code>
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