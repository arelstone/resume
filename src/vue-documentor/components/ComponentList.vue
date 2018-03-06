<template>
    <div id="component-list">
        <h3>Components</h3>
        <ul>
            <li>
                <router-link to="/documentor">All components</router-link>
            </li>
            <li v-for="component in components">
                <router-link :to="`/documentor/${component.name}`">{{getFilename(component.filename)}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'component-list',
    introduction: '',
    description: '',
    token: '',
    props: {
      components: {type: Array, required: true},
      source: {type: String, default: 'src/components/'}
    },
    methods: {
      getFilename (filename) {
        return filename.split(this.source)[1]
      }
    },
    mounted () {
      this.components.forEach(component => {
          console.log(component.filename.substring(0, component.filename.indexOf('/')))
        //console.log(this.getFilename(component.filename))
      })
    }
  }
</script>

<style scoped lang="scss">

</style>