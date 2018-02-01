<template>
    <div id="languages" class="row">
        <headline text="Sprog" class="col-12" icon="../../static/img/headline/compass-svgrepo-com.svg" ></headline>
        <div v-for="language in languages" class="col-xs-6 col-sm-4 item">
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
    @import '../assets/style/style';

    #languages {
        @include FontLight;
        @include Lato;
        .item {
            padding: 10px;
        }

    }
</style>