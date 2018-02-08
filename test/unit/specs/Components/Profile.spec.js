/* eslint-disable padded-blocks */
import Vue from 'vue'
import { Profile } from '@/components'
import chai from 'chai'

const expect = chai.expect
describe('Profile.vue', () => {

  it('should render a test with first letter as capital', () => {
    const Constructor = Vue.extend(Profile)
    const vm = new Constructor({
      propsData: {
        text: 'this is a text string'
      }
    }).$mount()
    expect(vm.$el.querySelector('div.content').textContent).to.equal('This is a text string')
  })
})
