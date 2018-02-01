<template>
    <div class="hello">
        <contact :name="resume.basics.name"
                 :phone="resume.basics.phone"
                 :email="resume.basics.email"
                 :address="resume.basics.location.address"
                 :city="resume.basics.location.city"
                 :zip="resume.basics.location.postalCode"
                 :country="resume.basics.location.region"/>
        <profile :text="resume.basics.summary"/>
        <work :work="resume.work"/>
        <skills :skills="resume.skills"/>
        <profiles :profiles="resume.basics.profiles"/>
        <interests :interests="resume.interests"/>
        <languages :languages="resume.languages"/>
    </div>
</template>

<script>
  import * as Components from '../components'

  export default {
    name: 'Home',
    components: {
      ...Components
    },
    computed: {
      language () {
        return (navigator.language) ? navigator.language : navigator.userLanguage
      },
      resume () {
        return require(`../resume/${this.language}.json`)
      }
    },
    data () {
      return {
        // resume: require(`../resume/${this.language}.json`),
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
