<template>
    <div class="row" id="Profiles">
        <div class="col-12">
            <headline text="Profils"></headline>
        </div>
        <div class="col-12">
            <ul>
                <li v-for="profile in profiles">
                    <a :href="profile.url" target="_blank" :title="profile.network">
                        <img :src="`static/img/${profile.icon}`" :alt="profile.network">
                        {{profile.username}}
                    </a>
                </li>
            </ul>
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
        ul {
            list-style: none;
            li {
                display: inline-block;
                margin: 20px;
                img {
                    margin-bottom: -5px;
                    width: 20px;
                }
            }
        }
    }

</style>