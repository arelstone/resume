<template>
    <div :class="cssClass">
        <slot/>
    </div>
</template>

<script>
  export default {
    name: 'prop-cell',
    introduction: '',
    description: '',
    token: '',
    props: {field: {type: String, required: true}},
    computed: {
      cssClass () {
        return this.field && `prop-cell field-${this.field}` || `prop-cell`
      }
    }
  }
</script>

<style scoped lang="scss">

</style>