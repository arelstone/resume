<template>
    <div class="skill-item">
        <div class="skill--name" :title="skill.type">
            {{skill.name}}
            <img :src="`static/img/${skill.icon}`">
        </div>
        <ul>
            <li v-for="x in skill.level" :title="skillTitle(skill)">
                <skill-circle :level="skill.level" :i="x" />
            </li>
        </ul>
    </div>
</template>

<script>
  import { ucFirst } from '../Utils'
  import SkillCircle from './SkillCircle'

  export default {
    name: 'skill-item',
    introduction: '',
    description: '',
    token: '',
    props: {
      skill: {type: Object, required: true}
    },
    components: {SkillCircle},
    methods: {
      skillTitle (skill) {
        return `${skill.level} ${skill.name}  - ${ucFirst(skill.type)}`
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">

    @import '../assets/style/style';


    $skill-color: #088bbf;
    $class-slug: skill-- !default;

    @mixin skillColor($x) {
        //fill: darken($skill-color, ($x*3)/9);
        //fill: darken($skill-color, ($x*3)/9);
        fill: slategrey;
        //fill: #777777;
    }

    .skill--name {
        width: 150px;
        height: 120px;
        transform: rotate(90deg);
        margin-top: 10px;
        margin-left: -99px;
        text-align: right;
        @include FontLight;
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
        text-align: center;
        line-height: 12px;
        align-content: end;
        width: 100%;
        transform: rotate(180deg);

       /deep/ li {
            padding: 15px 10px;
            @for $i from 1 through 10 {
                .#{$class-slug}#{$i} {
                    @include skillColor($i);
                }
            }
            text-align: center;

        }
    }

</style>