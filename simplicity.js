// types
// a unit 1 is denoted by a constant string '⟨⟩'
// a pair (A × B) is denoted by a Pair object containing two elements
// a sum type (A + B) is denoted by a Sum object that can contain
//   either a (Left A) attribute
//   or a (Right B) attribute

// types
export class Pair {
  constructor(a, b) {
    if (a === undefined || b === undefined) {
      throw new Error('the Sum type must have two elements')
    }

    this.first = a
    this.second = b
  }

  toString() {
    return `(${this.first},${this.second})`
  }
}

export class Sum {
  constructor(a, b) {
    if (a !== undefined && b !== undefined) {
      throw new Error('the Sum type cannot have both Left and Right attributes!')
    }

    if (a === undefined && b === undefined) {
      throw new Error('the Sum type must have either Left or Right attributes!')
    }

    this.left = a
    this.right = b
  }

  toString() {
    if (this.left !== undefined) {
      return `(Left  ${this.left})`
    } else {
      return `(Right ${this.right})`
    }
  }
}

// values
export const UNIT = '⟨⟩'

// combinators
export function iden (a) {
  return a
}

export function unit () {
  return UNIT
}

export function comp (fn1) {
  return function _comp2 (fn2) {
    return function _comp3 (a) {
      return fn2(fn1(a))
    }
  }
}

export function injl (fn) {
  return function _injl2 (a) {
    return new Sum(fn(a), undefined)
  }
}

export function injr (fn) {
  return function _injr2 (a) {
    return new Sum(undefined, fn(a))
  }
}

export function case_ (ifLeft) {
  return function _case2 (ifRight) {
    return function _case3 (pair) {
      let ab = pair.first
      if (ab.left !== undefined) {
        return ifLeft(new Pair(ab.left, pair.second))
      } else if (ab.right !== undefined) {
        return ifRight(new Pair(ab.right, pair.second))
      }
    }
  }
}

export function pair (fn1) {
  return function _pair2 (fn2) {
    return function _pair3 (a) {
      return new Pair(fn1(a), fn2(a))
    }
  }
}

export function take (fn) {
  return function _take2 (pair) {
    return fn(pair.first)
  }
}

export function drop (fn) {
  return function _drop2 (pair) {
    return fn(pair.second)
  }
}
