/* eslint-disable padded-blocks */
import Vue from 'vue'
import { Profiles } from '@/components'
import chai from 'chai'

const expect = chai.expect
describe('Profiles.vue', () => {
  it('should render a list of social profiles', () => {
    const Constructor = Vue.extend(Profiles)
    const vm = new Constructor({
      propsData: {
        profiles: [
          {
            'network': 'some network',
            'username': 'someUser',
            'url': 'url.com',
            'icon': 'github.svg'
          }
        ]
      }
    }).$mount()

    expect(vm.$el.querySelector('#Profiles div.item').textContent.trim())
      .to.equal(vm.profiles[0].username)

    expect(vm.$el.querySelector('#Profiles div.item a').getAttribute('href'))
      .to.equal(vm.profiles[0].url)

    expect(vm.$el.querySelector('#Profiles div.item a img').getAttribute('src'))
      .to.equal('static/img/' + vm.profiles[0].icon)
  })
})
