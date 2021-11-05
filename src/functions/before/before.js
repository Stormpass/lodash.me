function before (n, func) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('before arg 1 must be a number')
  }
  if (typeof func !== 'function') {
    throw new Error('before arg 2 must be a function')
  }
  let result;
  return function(...args) {
    if (--n >= 0) {
      return result = func.call(this, ...args)
    } else {
      return result
    }
  }
}

module.exports = before