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
        <interests :interests="resume.interests"/>
        <languages :languages="resume.languages"/>
    </div>
</template>

<script>
  import Contact from '../components/Contact.vue'
  import Profile from '../components/Profile'
  import Work from '../components/Work'
  import Skills from '../components/Skills'
  import Interests from '../components/Interests'
  import Languages from '../components/Languages'

  export default {
    name: 'Home',
    components: {
      Profile,
      Contact,
      Work,
      Skills,
      Interests,
      Languages
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
