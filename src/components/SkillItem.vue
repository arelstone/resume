<template>
    <div class="skill-item">
        <div class="skill--name" :title="skill.type">
            {{skill.name}}
            <img :src="`static/img/${skill.icon}`">
        </div>
        <ul>
            <li v-for="x in skill.level" :title="skillTitle(skill)">
                <skill-circle :level="skill.level" :i="x"/>
            </li>
        </ul>
    </div>
</template>

<script>
  import { ucFirst } from '../Utils'
  import SkillCircle from './SkillCircle'

  export default {
    name: 'skill-item',
    introduction: 'SkillItem.vue',
    description: 'A skill-item that renders the amount of level as circles',
    token: '<skill-item>',
    props: {
      skill: {type: Object, required: true, note: 'Skill collection'}
    },
    components: {SkillCircle},
    methods: {
      skillTitle (skill) {
        return `${skill.level} ${skill.name}  - ${ucFirst(skill.type)}`
      }
    }
  }
</script>

<style scoped lang="scss">

    @import '../assets/style/style';
    @import '../assets/style/palettes/palette5';

    $skill-color: $color3;
    $class-slug: skill-- !default;

    @mixin skillColor($x) {
        //fill: darken($skill-color, ($x*3)/9);
        //fill: darken($skill-color, ($x*3)/9);
        fill: $skill-color;
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
            text-align: center;
            @for $i from 1 through 10 {
                .#{$class-slug}#{$i} {
                    @include skillColor($i);
                }
            }
        }
    }

    .skill-item:hover {
        /deep/ circle {
            fill: $color1;
        }
    }

</style>
