function ary (func, n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('n must be a number')
  }
  if (typeof func !== 'function') {
    throw new Error('not a function')
  }
  n = parseInt(n)
  return function(...args) {
    return func.call(this, ...args.slice(0, n))
  }
}

module.exports = ary