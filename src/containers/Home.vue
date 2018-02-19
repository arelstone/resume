<template>
    <div class="hello">
        <skew-container id="Contact"
                        margin="0"
                        bg-color="#2D2A32">
            <contact :name="resume.basics.name"
                     :phone="resume.basics.phone"
                     :email="resume.basics.email"
                     :address="resume.basics.location.address"
                     :city="resume.basics.location.city"
                     :zip="resume.basics.location.postalCode"
                     :country="resume.basics.location.region"/>
        </skew-container>
        <skew-container id="Profile">
            <profile :text="resume.basics.summary"/>
        </skew-container>
        <skew-container id="Skills">
            <skills :skills="resume.skills"/>
        </skew-container>
        <skew-container id="Work">
            <work :work="resume.work"/>
        </skew-container>
        <skew-container id="Interests">
            <interests :interests="resume.interests"/>
        </skew-container>
        <skew-container id="Profiles">
            <profiles :profiles="resume.basics.profiles"/>
        </skew-container>
        <skew-container id="Languages">
            <languages :languages="resume.languages"/>
        </skew-container>
    </div>
</template>

<script>
  import * as Components from '../components'
  import SkewContainer from '../components/SkewContainer'

  export default {
    name: 'Home',
    components: {
      ...Components,
      SkewContainer
    },
    computed: {
      language () {
        return (navigator.language) ? navigator.language : navigator.userLanguage
      },
      resume () {
        return require(`../resume/da.json`)
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
    #Contact {
        margin-bottom: 100px;
        /deep/ .skew {
            box-shadow: none !important;
            background: url("../assets/profile-image.png") center center no-repeat;
            background-size: cover;

        }
    }

    #Profile, #Skills, #Profiles, #Work, #Interests, #Languages {
        padding-bottom: 100px;
    }
</style>
