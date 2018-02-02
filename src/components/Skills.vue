<template>
    <div class="row" id="Skills">
        <div class="col-12">
            <headline text="Skills" :icon="Icon"/>
        </div>
        <div class="skill-items">
            <div v-for="skill in sorted" class="item">
                <skill-item :skill="skill"/>
            </div>
        </div>
    </div>
</template>

<script>
  import sortOn from 'sort-on'
  import Headline from './Headline.vue'
  import SkillItem from './SkillItem'
  import Icon from '../assets/img/pencil-svgrepo-com.svg'

  export default {
    name: 'skills',
    description: 'A component for displaying skill-items. The skills prop will be sorted by type and filtered by level',
    token: '<skills :skills="[{name: "Some skill", level: 2, type: "language|framework|other", icon: "path/to/icon.png"}]">',
    data () {
      return {
        sortOrder: ['language', 'framework', 'other'],
        Icon
      }
    },
    props: {
      skills: {
        type: Object | Array,
        required: true,
        default: {},
        note: 'A collection of skills.'
      }
    },
    components: {
      SkillItem,
      Headline
    },
    mounted () {
    },
    computed: {
      sortedByLevel () {
        return sortOn(this.skills, 'level').reverse()
      },
      sorted () {
        const firstSort = this.sortOrder.map(type => this.sortedByLevel.filter(f => f.type === type))
        return [].concat(...firstSort)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/style/style';

    $skill-color: #088bbf;
    $class-slug: skill-- !default;

    @mixin skillColor($x) {
        fill: darken($skill-color, ($x*3)/9);
    }

    #Skills {
        .skill-items {
            margin: 0 15px;
            overflow-x: scroll;
            white-space: nowrap;

            &::-webkit-scrollbar {
                //width: 0.2em;
                height: 0.4em;
                &-track {
                    -webkit-box-shadow: inset 0 0 0 transparent;
                }
                &-thumb {
                    background-color: slategrey;
                    outline: 1px solid slategrey;
                    border-radius: 5px;
                }
            }

            .item {
                display: inline-flex;
                width: 2.8em;
                padding-left: 6px;
            }
        }
    }
</style>