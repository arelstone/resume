<template>
    <section>
    </section>
</template>
<script>
  import Skills from '../components/Skills.vue'

  export default {
    name: 'Documentation',
    data () {
      return {skills: Skills}
    },
    mounted () {
      console.log(this.skills)
    }
  }
</script>