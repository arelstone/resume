/* eslint-disable padded-blocks */
import Vue from 'vue'
import { WorkItem } from '@/components'
import chai from 'chai'

const expect = chai.expect
describe('WorkItem.vue', () => {
  it('should render correctly', () => {
    const Constructor = Vue.extend(WorkItem)
    const vm = new Constructor({
      propsData: {
        position: 'Some position',
        company: 'Some company',
        website: 'http://url.com',
        highlights: ['highlight 1', 'highlight 2']
      }
    }).$mount()
    expect(vm.$el.querySelector('.work-item h4').textContent.trim())
      .to.equal(vm.position)

    expect(vm.$el.querySelector('.work-item h5').textContent.trim())
      .to.equal(vm.company)

    expect(vm.$el.querySelector('.work-item h5 a').getAttribute('href'))
      .to.equal(vm.website)

    expect(vm.$el.querySelector('.work-item h5').textContent.trim())
      .to.equal(vm.company)

    vm.$el.querySelectorAll('.work-item ul li')
      .forEach((li, i) => expect(li.textContent)
        .to.equal(vm.highlights[i]))

  })
})
