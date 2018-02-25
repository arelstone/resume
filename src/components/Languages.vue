<template>
    <div id="languages" class="row">
        <headline :text="$t('Languages')" class="col-12" :icon="Icon" />
        <div v-for="language in languages" class="col-xs-12 col-sm-6 item">
            {{language.name}}
            <small>- {{language.level}}</small>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline'
  import Icon from '../assets/img/compass-svgrepo-com.svg'

  export default {
    name: 'languages',
    introduction: 'A section for displaying spoken languages',
    description: 'A component for displaying spoken languages',
    token: '<languages :languages="[{name: "", level: ""}]" />',
    props: {
      languages: {type: Array, required: true, default: {}, note: 'A collection of languages'}
    },
    data () {
      return {
        Icon
      }
    },
    components: {Headline}
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    #languages {
        @include FontLight;
        @include Lato;
        padding: 20px 0 75px;

        .item {
            padding: 10px;
        }

    }
</style>