import chai from 'chai'

const expect = chai.expect

export function isSet(token){
  expect(token.length).to.be.above(0)
}

