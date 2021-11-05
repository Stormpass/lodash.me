const ary = require('./ary');
const origin = ['6', '8', '10']
const should = [6, 8, 10]
const parsed = origin.map(ary(parseInt, 1))

const length = parsed.length
test('ary test', () => {
  for(let i = 0; i < length; i++) {
    expect(parsed[i]).toEqual(should[i])
  }  
})
