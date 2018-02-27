<template>
    <div class="props">
        <prop-row>
            <prop-cell field="name">Prop</prop-cell>
            <prop-cell field="type">Type</prop-cell>
            <prop-cell field="defaultValue">Default value</prop-cell>
            <prop-cell field="description">Description</prop-cell>
        </prop-row>
        <prop-row v-for="prop in getProps">
            <prop-cell field="name">
                <b v-if="prop.required">*</b>{{prop.key}}
            </prop-cell>
            <prop-cell field="type">{{prop.type}}</prop-cell>
            <prop-cell field="defaultValue">{{prop.default}}</prop-cell>
            <prop-cell field="description">
                <b v-if="prop.required">Required!</b><span v-else>Optional!</span>{{prop.note}}
            </prop-cell>
        </prop-row>
    </div>
</template>

<script>
  import PropRow from './Props/PropRow'
  import PropCell from './Props/PropCell'

  export default {
    name: 'props',
    introduction: '',
    description: '',
    token: '',
    props: {component: {type: Object, required: true}},
    components: {PropRow, PropCell},
    methods: {
      getPropType (type) {
        if (typeof type === 'function') {
          return type.name
        }
        return type
      },
      getDefaultValue (value) {
        if (typeof value === 'undefined') {
          return 'Not set'
        } else if (typeof value === 'string' && value.length === 0) {
          return '""'
        }
        return value
      }
    },
    computed: {
      getProps () {
        return Object.keys(this.component.props).map(key => {
          const prop = this.component.props[key]
          const obj = {
            default: this.getDefaultValue(prop.default),
            type: this.getPropType(prop.type),
            note: prop.note,
            required: prop.required,
            key: key
          }
          return obj
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>