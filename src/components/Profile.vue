<template>
    <div class="row">
        <div class="col-12">
            <headline text="Profil"></headline>
        </div>
        <span class="drop-cap">J</span>
        <div class="col-12 text-content" v-html="cText"></div>
    </div>
</template>

<script>
  import Headline from './Headline.vue'

  export default {
    name: 'Profile',
    props: {
      text: {type: String, required: true}
    },
    components: {Headline},
    computed: {
      cText () {
        return '<span class="drop-cap">' + this.text.slice(0, 1) + '</span>' + this.text.slice(1)
      }
    }
  }
</script>

<style scoped lang="scss">
    .border {
        border: 1px solid red;
    }

    span.drop-cap {
        padding: 5px 10px 10px;
        float: left;
        background: #088bbf;
        color: white;
        font-size: 2em;
        text-align: center;
    }

    /*.text-content:first-letter {
        font-size : 300%;
        font-weight : bold;
        float : left;
        width : 1em;
        color : #c00;
        margin-top: -0.2em;
        margin-bottom: -0.5em;
    }*/


</style>