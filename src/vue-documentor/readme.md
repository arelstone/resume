#vue-documentor

Documentor is a addon for `vue-router` that creates living documentation for all of your components.

It is quite simple. Import the `Documentor` route mapping function and pass your components to it.

This package is inspired by [propellant/doctor](https://github.com/propellant/doctor/)

# Installation
Include `vue-documentor` with either npm og yarn
>       yarn add vue-documentor
or
>       npm install vue-documentor

### Getting started
You need to add some new properties to  all of your components. A `name `, an `introduction`, a `description` and a `token`. 

For all of your props they need to be defined as objects with a `note` property

##### Example
 ComponentB.Vue
```js
export default {
    name: 'component-a',
    introduction: 'This is component A',
    description: 'Description for ComponentA',
    token: '<component-a text="Hello from ComponentA.vue" />',
    props: {
      sayWhat: {type: String, required: true, note: 'Say something'},
      object: {type: Number, required: true, note: 'Some object that you would like to pass'}
    }
  }
```

 ComponentB.Vue
```js
export default {
    name: 'component-b',
    introduction: 'This is component B',
    description: 'Description for ComponentB',
    token: '<component-b text="Hello from ComponentB.vue" int="42" />',
    props: {
      text: {type: String, required: true, note: 'A string passed as props'},
      int: {type: Number, default: 42, note: 'A integer passed as props'},
      arr: {type: Array, note: 'A array passed as props'},
      obj: {type: Object, note: 'A object passed as props'}
    }
  }
```

components.js
```js
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
export {ComponentA, ComponentB}
```

In your router file add `mapDocumentorRoutes` and pass all your components
```js
import {mapDocumentorRoutes} from './vue-documentor'
import * as Components from './components.js'

// ...
new Router({
  // your own routes
  // {path: '/', name: 'Home', component: Home},
  ...mapDocumentorRoutes(Components)
})
```