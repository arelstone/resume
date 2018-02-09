import Vue from 'vue'
import * as Components from '@/components'
import chai from 'chai'

const expect = chai.expect

describe('DocItems: ', () => {
  Object.keys({...Components}).map(key => {
    const Constructor = Vue.extend(Components[key])
    const vm = new Constructor({})

    it(`${key}.vue should have a valid introduction`, () => {
      expect(vm.$options.introduction.length)
        .to.be.above(0)
    })

    it(`${key} should have a valid description`, () => {
      expect(vm.$options.description.length)
        .to.be.above(0)
    })

    it(`${key} should have a valid token`, () => {
      expect(vm.$options.token.length)
        .to.be.above(0)
    })

    Object.keys(vm.$options.props).forEach(prop => {
      it(`${key}.vue:${prop} should have a valid note`, () => {
        expect(vm.$options.props[prop].note.length)
          .to.be.above(0)
      })

      it(`${key}.vue:${prop} should have a valid type`, () => {
        const {type} = vm.$options.props[prop]
        expect(type.name === 'String' ||
          type.name === 'Number' ||
          type.name === 'Boolean' ||
          type.name === 'Function' ||
          type.name === 'Object' ||
          type.name === 'Array' ||
          type.name === 'Symbol')
          .to.be.true
      })
    })
  })
})
