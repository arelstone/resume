/* eslint-disable no-unused-expressions */
import Vue from 'vue'
import { Headline } from '@/components'
import Icon from '@/assets/img/book-svgrepo-com.svg'

describe('Headline.vue', () => {
  it('should take a text prop',
    () => {
      const Constructor = Vue.extend(Headline)
      const vm = new Constructor({
        propsData: {
          text: 'Hello world'
        }
      }).$mount()
      expect(vm.$el.querySelector('h2').textContent).to.equal('Hello world />')
    })

  it('should take a img prop',
    () => {
      const Constructor = Vue.extend(Headline)
      const vm = new Constructor({
        propsData: {
          text: 'Hello world',
          icon: Icon
        }
      }).$mount()
      expect(vm.$el.querySelector('img').src.startsWith('data:image/svg+xml;base64,'))
        .to.be.true
    })
})
