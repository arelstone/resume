<template>
    <tr>
        <td><img :src="image" :style="[additionalCss]"></td>
        <td class="skill">{{skill.name}}</td>
        <td class="level">
            <i v-for="(x, index) in parseInt(skill.level)" :class="['fa fa-circle', 'skill--'+x]"></i>
        </td>
    </tr>
</template>

<script>
  export default {
    name: 'SkillItem',
    props: {
      skill: {type: Object | Array, required: true}
    },
    computed: {
      additionalCss () {
        const {css} = this.skill.icon
        const cssStyle = []
        if (css) {
          Object.keys(css).forEach(key => {
            cssStyle[key] = css[key]
          })
          return cssStyle
        }
      },
      image () {
        return 'static/img/' + this.skill.icon.src
      }
    }
  }
</script>

<style scoped lang="scss">
    $skill-color: #088bbf;
    $class-slug: skill-- !default;

    @mixin skillColor($x) {
        color: darken($skill-color, $x);
    }

    tr {
    }

    ul {
        padding: 0;

    }

    td {
        img {
            text-align: left;
            width: 20px;
        }
        &.skill {
            font-size: 10px;
            line-height: 10px;
        }

        &.level .fa {
            margin: 2px;
            font-size: 10px;
            @for $i from 1 through 10 {
                &.#{$class-slug}#{$i} {
                    @include skillColor($i);
                }
            }
        }

    }


</style>