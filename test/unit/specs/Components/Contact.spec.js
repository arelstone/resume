/* eslint-disable padded-blocks */
import Vue from 'vue'
import { Contact } from '@/components'
import chai from 'chai'

const expect = chai.expect
describe('Contact.vue', () => {
  /*
  name: {type: String, required: true, note: 'The name to display'},
        phone: {type: String, required: true, note: 'The phone number to display'},
        email: {type: String, required: true, note: 'The e-mail to display'},
        address: {type: String, required: true, note: 'The address to display'},
        zip: {type: String | Number, required: true, note: 'The zip code to display'},
        city: {type: String, required: true, note: 'The city to display'},
        country: {type: String, required: true, note: 'The country to display'}
   */
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
    expect(vm.$el.querySelector('#address').textContent.trim())
      .to.equal(`${vm.address} - ${vm.zip} ${vm.city}`)
  })
})
