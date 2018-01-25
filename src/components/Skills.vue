<template>
    <div class="row" id="Skills">
        <div class="col-12">
            <headline text="Skills"/>
        </div>
        <div class="col-12">
            <div v-for="skills, key in sorted" class="skill-items">
                <div v-for="skill in skills" class="item">
                    <div class="skill--name" :title="skill.type">
                        {{skill.name}}
                        <img :src="`static/img/${skill.icon}`">
                    </div>
                    <ul>
                        <li v-for="x in skill.level" :title="skillTitle(skill)"><i
                                :class="['fa fa-circle', 'skill--'+x]"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import sortOn from 'sort-on'
  import { ucFirst } from '../Utils'
  import Headline from './Headline.vue'

  export default {
    name: 'Skills',
    introduction: 'skills',
    description: 'A component for displaying skill-items',
    token: '<skills :skills="[{name: "Some skill", level: 2, type: "language|framework|other", icon: "path/to/icon.png"}]">',
    data () {
      return {
        sortOrder: ['language', 'framework', 'other']
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
      Headline
    },
    methods: {
      skillTitle (skill) {
        return `${skill.level} ${skill.name}  - ${ucFirst(skill.type)}`
      }
    },
    computed: {
      sortedByLevel () {
        return sortOn(this.skills, 'level').reverse()
      },
      sorted () {
        return this.sortOrder.map(type => this.sortedByLevel.filter(f => f.type === type))
      }
    }
  }
</script>

<style scoped lang="scss">
    $skill-color: #088bbf;
    $class-slug: skill-- !default;

    @mixin skillColor($x) {
        color: darken($skill-color, $x*2);
    }

    #Skills {
        margin-bottom: 30px;
        .skill-items {
            .item {
                padding-top: 40px;
                height: 400px;
                float: left;
                display: inline-block;
                max-width: 40px;
                .skill--name {
                    width: 150px;
                    transform: rotate(90deg);
                    margin-bottom: 80px;
                    margin-left: -60px;
                    text-align: right;
                    img {
                        margin-bottom: -5px;
                        transform: rotate(-90deg);
                        width: 20px;
                        height: 20px;
                    }
                }
                ul {
                    list-style: none;
                    padding: 0;
                    width: 30px;
                    text-align: center;
                    line-height: 12px;
                    align-content: end;
                    li {
                        text-align: center;
                        margin: 5px 0;
                        i.fa {
                            @for $i from 1 through 10 {
                                &.#{$class-slug}#{$i} {
                                    @include skillColor($i);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>