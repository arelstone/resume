<template>
    <div class="hello">
        <contact :name="resume.basics.name"
                 :phone="resume.basics.phone"
                 :email="resume.basics.email"
                 :address="resume.basics.location.address"
                 :city="resume.basics.location.city"
                 :zip="resume.basics.location.postalCode"
                 :country="resume.basics.location.region"/>

        <profile :text="resume.basics.summary"></profile>
        <work :work="resume.work"></work>
        <skills :skills="resume.skills"></skills>
    </div>
</template>

<script>
  import Contact from '../components/Contact.vue'
  import Profile from '../components/Profile'
  import Work from '../components/Work'
  import Skills from '../components/Skills'

  const resume = require('../resources/resume.json')

  export default {
    name: 'Home',
    components: {
      Profile,
      Contact,
      Work,
      Skills
    },
    data () {
      return {
        resume: resume,
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
