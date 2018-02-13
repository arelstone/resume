import { ucFirst } from '@/Utils/UpperCaseFirst'

describe('Utils@ucFirst', () => {
  it('should make the first letter of a string uppercase', () => {
    expect(ucFirst('hello world')).to.equal('Hello world')
  })
})
