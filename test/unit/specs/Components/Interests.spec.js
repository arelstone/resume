/* eslint-disable padded-blocks */
import Vue from 'vue'
import { Interests } from '@/components'
import chai from 'chai'

const expect = chai.expect
describe('Interests.vue', () => {

  it('should render a list with first letter as capital', () => {
    const Constructor = Vue.extend(Interests)
    const vm = new Constructor({
      propsData: {
        interests: 'this is a text string'
      }
    }).$mount()
    expect(vm.$el.querySelector('div.content').textContent).to.equal('This is a text string')
  })
})
