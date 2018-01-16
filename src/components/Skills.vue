<template>
    <div class="row" id="Skills">
        <div class="col-12">
            <headline text="Skills"/>
        </div>
        <div v-for="cKey in computedSkills" class="col-xs-12 col-sm-4">

            <table>
                <skill-item id="skill-item" v-for="skill in sorted" :key="skill.name" :skill="skill"/>
            </table>
        </div>
        <div v-for="skills in sorted" class="skill-items">
            <div v-for="skill in skills" class="item">
                <span class="name">{{skill.name}}</span>
                <span class="level"> {{skill.level}}</span>
            </div>
        </div>

    </div>
</template>

<script>
  import sortOn from 'sort-on'
  import Bars from 'vuebars'
  import SmallHeadline from './SmallHeadline.vue'
  import Headline from './Headline.vue'
  import SkillItem from './SkillItem.vue'

  export default {
    name: 'Skills',
    introduction: 'skills',
    description: 'A component for displaying skill-items',
    token: '<skills :skills="[]">',
    data () {
      return {
        sortOrder: ['language', 'framework', 'other'],
        chartData: [
          { x: 1, y: 50 },
          { x: 2, y: 4 },
          { x: 3, y: 22 },
          { x: 4, y: 11 },
          { x: 5, y: 13 },
          { x: 6, y: 15 },
          { x: 7, y: 13 },
          { x: 8, y: 50 },
          { x: 9, y: 5 },
          { x: 10, y: 13 },
          { x: 11, y: 15 },
          { x: 12, y: 28 },
          { x: 13, y: 30 },
          { x: 15, y: 17 },
          { x: 16, y: 3 },
          { x: 17, y: 11 },
          { x: 18, y: 22 },
          { x: 19, y: 2 }
        ],
        options: {
          rules: true,
          axis: true,
          labels: true,
          padding: 0.3,
          line: true,
          points: false,
          value: false,
          gradient: {
            stroke: true
          },
          curve: {},
          getX: (d) => {
            return d.x
          },
          getY: (d) => {
            return d.y
          }
        }
      }
    },
    props: {
      skills: {
        type: Object | Array,
        required: true,
        default: {},
        note: 'A collection of skills. The collection will be looped thou and displayed using the <skill-item> component'
      }
    },
    components: {
      SkillItem,
      Headline,
      SmallHeadline,
      Bars
    },
    mounted () {

    },
    computed: {
      sortedByLevel () {
        return sortOn(this.skills, 'level').reverse()
      },
      sorted () {
        return this.sortOrder.map(type => this.sortedByLevel.filter(f => f.type === type))
      },
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
    #Skills {
        margin-bottom: 30px;
    }
</style>