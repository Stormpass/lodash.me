const before = require('./before')

test('before first arg must be a number', function() {
  expect(() => {
    before('string')()
  }).toThrow()
})

test('before second arg must be a function', function() {
  expect(() => {
    before(2, 'string')()
  }).toThrow()
})

test('sum0_1 function max be call 3 times', function(){
  const sum0_1 = (function() {
    let origin = 0
    return function() {
      return origin += 1
    }
  })()
  const sum0_1_max_3 = before(3, sum0_1)
  expect(sum0_1_max_3()).toEqual(1)
  expect(sum0_1_max_3()).toEqual(2)
  expect(sum0_1_max_3()).toEqual(3)
  expect(sum0_1_max_3()).toEqual(3)
  expect(sum0_1_max_3()).toEqual(3)
  expect(sum0_1_max_3()).toEqual(3)
  expect(sum0_1_max_3()).toEqual(3)
  expect(sum0_1_max_3()).toEqual(3)
})