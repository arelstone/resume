<template>
    <div id="interests">
        <headline text="Sprog"></headline>
        <div v-for="language in languages">
            {{language.name}}
            <small>- {{language.level}}</small>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline'

  export default {
    name: 'languages',
    introduction: 'A section for displaying spoken languages',
    description: '',
    token: '<languages :languages="[{name: "", level: ""}]" />',
    props: {
      languages: {type: Array, required: true, default: {}, note: 'A collection of languages'}
    },
    components: {Headline}
  }
</script>

<style scoped lang="scss">

</style>