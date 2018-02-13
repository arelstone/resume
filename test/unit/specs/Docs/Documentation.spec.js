import Vue from 'vue'
import * as Components from '@/components'
import chai from 'chai'
import assertType from 'chai-asserttype'

const expect = chai.expect
chai.use(assertType)

describe('c-doc: ', () => {
  // Loop all components in the index file
  Object.keys(Components).map(key => {
    const Constructor = Vue.extend(Components[key])
    const vm = new Constructor({})
    const {introduction, description, token, props} = vm.$options

    // Check if the compponent has a introduction
    it(`${key}.vue should have a valid introduction`, () => {
      return expect(introduction).to.have.lengthOf.above(0)
    })

    // Check if the compponent has a description
    it(`${key} should have a valid description`, () => {
      return expect(description).to.have.lengthOf.above(0)
    })

    // Check if the compponent has a token
    it(`${key} should have a valid token`, () => {
      return expect(token).to.have.lengthOf.above(0)
    })

    // if props loop thru each prop and do test
    if (props) {
      it(`${key} props should be a object`, () => {
        expect(props).to.be.object()
      })

      Object.keys(props).forEach(propName => {
        const prop = props[propName]
        it(`${key}:${propName} should be a object`, () => {
          expect(prop).to.be.object()
        })

        it(`${key}:${propName} should have a valid note`, () => {
          return expect(prop.note).to.have.lengthOf.above(0)
        })
      })
    }
  })
})
