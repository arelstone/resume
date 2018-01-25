<template>
    <section>
        <headline text="Documentation"></headline>
        <doc-item :component="Contact"/>
        <doc-item :component="Languages"/>
        <doc-item :component="Headline"/>
        <doc-item :component="Profile"/>
        <doc-item :component="Skills"/>
        <doc-item :component="Work"/>
        <doc-item :component="WorkItem"/>

    </section>
</template>

<script>
  import hljs from 'highlight.js'
  import { Languages, Headline, Contact, Profile, Skills, Work, WorkItem } from '../components'
  import DocItem from '../components/docs/DocItem'

  export default {
    name: 'Documentation',
    data () {
      return {
        Contact,
        Languages,
        Headline,
        Profile,
        Skills,
        Work,
        WorkItem
      }
    },
    components: {
      DocItem, Headline
    },
    mounted () {
      hljs.initHighlightingOnLoad()
    }
  }
</script>

<style lang="scss">
    @import "../../node_modules/highlight.js/styles/rainbow.css";

</style>
