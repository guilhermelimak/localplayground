import { sum } from './sum'

describe('sum', () => {
  it('should sum two numbers', () => {
    expect.hasAssertions()

    expect(sum(2, 2)).toEqual(4)
  })
})
