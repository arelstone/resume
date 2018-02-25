<template>
    <div class="row" id="Profiles">
        <div class="col-12">
            <headline text="Profiler" :icon="Icon"/>
        </div>
        <div v-for="profile in profiles" class="col-xs-12 col-sm-6 item">
            <a :href="profile.url" target="_blank" :title="profile.network">
                <img :src="`static/img/${profile.icon}`" :alt="profile.network">
                {{profile.username}}
            </a>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline.vue'
  import Icon from '../assets/img/mug-svgrepo-com.svg'

  export default {
    name: 'profiles',
    introduction: 'Social Profiles',
    description: 'A component for displaying social profiles',
    token: '<profiles :profiles="[{}]"/>',
    props: {
      profiles: {type: Array, required: true, note: 'An array of profiles'}
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
    @import '../assets/style/fonts';
    @import '../assets/style/variables';

    #Profiles {
        a {
            color: $primary-color;
            text-decoration: none;
            &:hover {
                color: darken($primary-color, 20)
            }
        }
            .item {
                display: inline-block;
                margin: 10px 0;
                img {
                    margin-bottom: -5px;
                    width: 20px;
                }
            }
    }

</style>