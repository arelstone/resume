<template>
    <section>
        <h1>Documentation</h1>
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
    mounted () {
      document.querySelectorAll('pre code').forEach(block => hljs.highlightBlock(block))
    },
    components: {
      DocItem
    }
  }
</script>

<style lang="scss">
    @import "../../node_modules/highlight.js/styles/rainbow.css";

</style>
