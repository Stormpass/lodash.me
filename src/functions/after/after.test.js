// const { expect } = require('chai')
const after = require('./after')

const time = 3
let origin = ''
let ok_name = 'ok'
let name = origin
const callback = function() {
  name = ok_name
}

const func = after(time, callback)
test('after', () => {
  func()
  expect(name).toBe(origin)
  func()
  expect(name).toBe(origin)
  func()
  expect(name).toBe(ok_name)
})
