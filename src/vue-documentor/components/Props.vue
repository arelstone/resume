<template>
    <table class="props">
        <tr class="props--row">
            <td class="props--cell">Prop</td>
            <td class="props--cell">Type</td>
            <td class="props--cell">Default value</td>
            <td class="props--cell">Description</td>
        </tr>
        <tr v-for="prop in getProps" class="props--row">
            <td class="props--cell">
                <b v-if="prop.required">*</b>{{prop.key}}
            </td>
            <td class="props--cell">{{prop.type}}</td>
            <td class="props--cell">{{prop.default}}</td>
            <td class="props--cell">
                <b v-if="prop.required">Required!</b><span v-else>Optional!</span> {{prop.note}}
            </td>
        </tr>
    </table>
</template>

<script>

  export default {
    name: 'props',
    introduction: '',
    description: '',
    token: '',
    props: {component: {type: Object, required: true}},
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