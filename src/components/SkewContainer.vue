<template>
    <div id="skew-container">
        <section class="skew"
                 :style="css">
            <article>
                <slot></slot>
            </article>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'skew-container',
    introduction: 'A container for skewing the content',
    description: 'Skrew the content ',
    token: '<skew-container><slot></slot></skew-container>',
    props: {
      margin: {type: String, default: '0 10vw', note: 'the margin'},
      bgColor: {type: String, default: '#FAFDF6', note: 'the background color'}
    },
    computed: {
      css () {
        return `background-color: ${this.bgColor};
                margin: ${this.margin}`
      }
    }
  }
</script>

<style scoped lang="scss">
    $degree: 3deg;
    $color: rgba(#83A0A0, 1);
    section.skew {
        padding: 0 75px;
        transform: skew(0deg, $degree);
        box-shadow: 12px 12px 0px 0 $color;
        article {
            transform: skew(0deg, -$degree)
        }
    }
</style>