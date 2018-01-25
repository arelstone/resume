import Vue from 'vue'
import Headline from '@/components/Headline'

describe('Headline.vue', () => {
  it('should render correct contents', () => {
    console.log('Headline.vue')

    const Constructor = Vue.extend(Headline)
    const vm = new Constructor().$mount()
    console.log(vm)
// expect(vm.$el.querySelector('.headline h2').textContent).to.equal('<Hello world />')
  })
})
