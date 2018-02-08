/* eslint-disable padded-blocks,no-unused-expressions */
import Vue from 'vue'
import { SkillItem } from '@/components'
import * as Utils from '@/Utils'
import chai from 'chai'

const expect = chai.expect

describe('SkillItem.vue', () => {
  const Constructor = Vue.extend(SkillItem)
  const vm = new Constructor({
    propsData: {
      skill: {name: 'html', level: 10, icon: 'html.svg', type: 'language'}
    }
  }).$mount()

  it('should set the skill-name', () => {
    const query = vm.$el.querySelector('.skill-item .skill--name').textContent.trim()
    expect(Utils.ucFirst(vm.skill.name))
      .to.equal(Utils.ucFirst(query))
  })

  it('should set the correct image source', () => {
    const query = vm.$el.querySelector('.skill-item .skill--name img').getAttribute('src')
    expect(query)
      .to.equal(`static/img/${vm.skill.icon}`)
  })

  it('should render a list with the provided (skill.level) number of items ', () => {
    expect(vm.$el.querySelectorAll('ul li').length)
      .to.equal(vm.skill.level)
  })

  it('radius should be less then or equal to 10', () => {
    vm.$el.querySelectorAll('.skill-item ul li #skill-circle svg circle')
      .forEach(circle => {
        const radius = circle.getAttribute('r')
        expect(radius <= 10)
          .to.be.true
      })
  })

  it('radius should be greater then the one before', () => {
    let prevRadius = 0
    vm.$el.querySelectorAll('.skill-item ul li #skill-circle svg circle')
      .forEach(circle => {
        const radius = circle.getAttribute('r')
        prevRadius = radius
        expect(radius <= prevRadius && radius <= 10)
          .to.be.true
      })
  })
})
