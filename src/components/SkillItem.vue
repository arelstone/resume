<template>
    <div>
        <img :src="'../'+skill.icon">
        {{skill.name}}
        <span class="level">
            <span v-for="(x, index) in parseInt(skill.level)">x</span>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'SkillItem',
    props: {
      skill: {type: Object | Array, required: true}
    }
  }
</script>

<style scoped lang="scss">

</style>