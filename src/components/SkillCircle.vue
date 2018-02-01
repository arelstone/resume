<template>
    <div id="skill-circle">
        <svg height="20" width="20">
            <circle cx="10" cy="10" :r="size" :class="`skill--${i}`"></circle>
        </svg>
    </div>
</template>

<script>
  export default {
    name: 'skill-circle',
    introduction: '',
    description: '',
    token: '',
    props: {
      level: {type: Number | String, required: true},
      i: {type: Number, required: true}
    },
    methods: {},
    computed: {
      size () {
        const calc = 1 + ((this.level * this.i) + 4) / 10
        if (calc > 10) {
          return 10
        }
        return calc
      }
    }
  }
</script>

<style scoped lang="scss">

</style>