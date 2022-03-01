import {
  UNIT,
  Sum,
  Pair,

  comp,
  pair,
  iden,
  unit,
  case_,
  injr,
  injl,
  drop,
} from './simplicity.js'

export const ZERO = new Sum(UNIT, undefined)
export const ONE = new Sum(undefined, UNIT)

export function not (bit) {
  return comp(
    pair(iden)(unit)
  )(
    case_(injr(unit))(injl(unit))
  )(bit)
}

export function halfadder (bitpair) {
  return case_(
    drop(pair(injl(unit))(iden))
  )(
    drop(pair(iden)(not))
  )(bitpair)
}
