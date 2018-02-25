/* eslint-disable padded-blocks */
import Vue from 'vue'
import { Contact } from '@/components'
import chai from 'chai'

const expect = chai.expect
describe('Contact.vue', () => {

  it('should render correctly', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor({
      propsData: {
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '12345678',
        address: 'Random Street 42',
        city: 'Beverly Hills',
        zip: '90210',
        country: 'USA'
      }
    }).$mount()
    expect(vm.$el.querySelector('#name').textContent.trim())
      .to.equal(vm.name)
    expect(vm.$el.querySelector('#email').textContent.trim())
      .to.equal(vm.email)
    expect(vm.$el.querySelector('#phone').textContent.trim())
      .to.equal(vm.phone)

  })
})
