// types
// a unit 1 is denoted by a constant string '~unit~'
// a pair (A × B) is denoted by an array with two elements: [A, B]
// a sum type (A + B) is denoted by an object that can contain
//   either a {Left: A} attribute
//   or a {Right: B} attribute

// values
const UNIT = '~unit~'

const ZERO = {Left: UNIT}
const ONE = {Right: UNIT}

// combinators
export function iden (a) {
  return a
}

export function unit () {
  return UNIT
}

export function comp (fn1) {
  return function (fn2) {
    return function (a) {
      return fn2(fn1(a))
    }
  }
}

export function injl (fn) {
  return function (a) {
    return {Left: fn(a)}
  }
}

export function injr (fn) {
  return function (a) {
    return {Right: fn(a)}
  }
}

export function case (ifLeft) {
  return function (ifRight) {
    return function ([{Left: a, Right: b}, c]) {
      if (a !== undefined && b !== undefined) {
        throw new Error('broken! the sum type cannot have both Left and Right attributes!')
      }

      if (a !== undefined) {
        return ifLeft(a)
      } else if (b !== undefined) {
        return ifRight(a)
      } else {
        throw new Error('broken! the sum type must have either Left or Right attributes!')
      }
    }
  }
}

export function pair (fn1) {
  return function (fn2) {
    return function (a) {
      return [fn1(a), fn2(a)]
    }
  }
}

export function take (fn) {
  return function ([a, _]) {
    return fn(a)
  }
}

export function drop (fn) {
  return function ([_, b]) {
    return fn(b)
  }
}
