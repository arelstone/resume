<template>
    <div class="row">
        <div class="col-12">
            <headline text="Skills"/>
        </div>
        <div class="col-12" v-for="cKey in Object.keys(computedSkills)">
            <div class="row">
                <div class="col-12">
                    <small-headline :text="cKey"/>
                </div>
                <div class="col-12">
                    <skill-item v-for="skill in computedSkills[cKey]" :skill="skill"></skill-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import SortOn from 'sort-on'
  import Headline from './Headline.vue'
  import SmallHeadline from './SmallHeadline.vue'
  import SkillItem from './SkillItem.vue'

  window.SortON = SortOn
  export default {
    name: 'Skills',
    props: {
      skills: {type: Object | Array, required: true}
    },
    components: {
      SkillItem,
      Headline,
      SmallHeadline
    },
    computed: {
      computedSkills () {
        // @todo make filter to sort skill.level
        const skills = []
        this.skills.map(skill => {
          const type = skill.type.toLowerCase()
          if (!skills[type]) {
            skills[type] = []
          }
          skills[type].push(skill)
        })
        return skills
      }
    }
  }
</script>

<style scoped lang="scss">

</style>