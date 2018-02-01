<template>
    <div class="row" id="Profiles">
        <div class="col-12">
            <headline text="Profils" icon="../../static/img/headline/mug-svgrepo-com.svg"></headline>
        </div>
        <div v-for="profile in profiles" class="col-xs-2 col-sm-4 item">
            <a :href="profile.url" target="_blank" :title="profile.network">
                <img :src="`static/img/${profile.icon}`" :alt="profile.network">
                {{profile.username}}
            </a>
        </div>
    </div>
</template>

<script>
  import Headline from './Headline.vue'

  export default {
    name: 'profiles',
    props: {
      profiles: {type: Array, required: true, note: 'An array of profiles'}
    },
    components: {Headline}
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    #Profiles {
        a {
            color: $primary-color;
            text-decoration: none;
            &:hover {
                color: darken($primary-color, 20)
            }
        }
        .item {
            padding: 10px;

            img {
                margin-right:10px;
                margin-bottom: -3px;
                width: 20px;
            }
        }
    }


</style>