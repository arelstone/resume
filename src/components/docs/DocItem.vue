<template>
    <section class="doc-item" :id="component.name">
        <h2>{{Utils.ucFirst(component.name)}}</h2>
        <div class="doc-item--filename">File: {{component.__file}}</div>

        <p class="doc-item--introduction">{{component.introduction}}</p>
        <p class="doc-item--description">{{component.description}}</p>
        <table class="doc-item--props">
            <thead>
            <tr>
                <th>Prop name</th>
                <th>Type</th>
                <th>Default value</th>
                <th>Description</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="prop in getProps">
                <td>
                    <span :class="{underline: prop.required}">{{prop.key}}</span>
                </td>
                <td>{{prop.type}}</td>
                <td>{{prop.default}}</td>
                <td>
                    <b v-if="prop.required">Required!</b>
                    <span v-if="!prop.required">Optional!</span>
                    {{prop.note}}
                </td>
            </tr>
            </tbody>
        </table>
        <div class="doc-item--example" v-if="typeof this.component.token !== 'undefined'">
            <h4>Example:</h4>
            <pre><code class="html">{{component.token}}</code></pre>
        </div>
        <div class="doc-item--components" v-if="component.components">
            <h5>Components used by this component</h5>
            <ul>
                <li v-for="component in getComponents">
                    {{component}}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
  import * as Utils from '../../Utils'

  export default {
    name: 'doc-item',
    introduction: 'Component for displaying documentation',
    description: 'This component will display documentation for a compoennt',
    token: '<doc-item :component="SomeComponent" />',
    data () {
      return {
        Utils
      }
    },
    props: {
      component: {type: Object, required: true, note: 'The component that needs to be documented'}
    },
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
          // console.log(obj)
          return obj
        })
      },
      getComponents () {
        return Object.keys(this.component.components).map(key => this.component.components[key].name)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../../assets/style/variables";

    .doc-item {
        background: white;
        padding: 10px;
        margin: 20px;
        h2 {
            margin: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        &--filename {
            font-size: 0.7em;
        }
        .underline {
            text-decoration: underline;
        }

        &--introduction {
        }
        &--description {
        }
        &--example {
        }
    }

    table {
        width: 100%;
        th {
            background: $primary-color;
            color: $white;
            padding: 8px;
            text-align: left;
            font-weight: normal;
            min-width: 100px;
            font-size: 0.9em;

        }
        td {
            text-align: left;
            padding: 5px;
            background: rgba(100, 100, 100, 0.1);
            font-size: 0.8em;

        }
    }
</style>