<template>
    <div id="skill-circle">
        <svg height="20" width="20">
            <circle cx="10" cy="10" :r="size" :class="`skill--${i}`"></circle>
        </svg>
    </div>
</template>

<script>
  import * as Utils from '../Utils'

  export default {
    name: 'skill-circle',
    introduction: 'A circle with a calculated radius',
    description: 'Displays a circle with a calculated radius',
    token: '<skill-circle level="5" i="2"/>',
    props: {
      level: {type: Number | String, required: true, note: 'The level of the skill'},
      i: {
        type: Number,
        required: true,
        note: 'The index of the loop. This is used til calculate the radius of the circle'
      }
    },
    methods: {},
    computed: {
      size () {
        return Utils.calculateRadius(this.level, this.i)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>