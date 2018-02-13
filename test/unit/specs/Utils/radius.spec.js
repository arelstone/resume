import { calculateRadius } from '@/Utils/radius'

describe('Utils@radius', () => {
  it('should return max 10', () => {
    expect(calculateRadius(10, 11)).to.be.most(10)
  })

  it('first > second > third', () => {
    const radiusOne = calculateRadius(9, 8)
    const radiusTwo = calculateRadius(9, 9)
    const radiusThree = calculateRadius(9, 10)
    expect(radiusOne).to.be.below(radiusTwo)
    expect(radiusTwo).to.be.below(radiusThree)
  })
})
