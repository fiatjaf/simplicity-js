import * as s from './simplicity.js'
import * as m from './more.js'

console.log(`
some definitions and value examples:
  zero:         ${m.ZERO}  
  one:          ${m.ONE}
  (one × zero): ${[m.ONE, m.ZERO]}

demo of the 9 basic combinators:
  iden zero:                      ${s.iden(m.ZERO)}
  unit _:                         ${s.unit()}
  pair unit (iden one) zero:      ${s.pair(s.unit)(s.iden)(m.ZERO)}
  take iden (one × zero):         ${s.take(s.iden)(new s.Pair(m.ONE, m.ZERO))}
  drop iden (one × zero):         ${s.drop(s.iden)(new s.Pair(m.ONE, m.ZERO))}
  comp iden (pair iden iden) one: ${s.comp(s.iden)(s.pair(s.iden)(s.iden))(m.ONE)}

more advanced things:
  not zero:                ${m.not(m.ZERO)}
  not one:                 ${m.not(m.ONE)}
  (zero × zero):           ${new s.Pair(m.ZERO, m.ZERO)}
  (zero × one):            ${new s.Pair(m.ZERO, m.ONE)}
  (one  × zero):           ${new s.Pair(m.ONE, m.ZERO)}
  (one  × one):            ${new s.Pair(m.ONE, m.ONE)}
  halfadder (zero × zero): ${m.halfadder(new s.Pair(m.ZERO, m.ZERO))}
  halfadder (zero × one):  ${m.halfadder(new s.Pair(m.ZERO, m.ONE))}
  halfadder (one  × zero): ${m.halfadder(new s.Pair(m.ONE, m.ZERO))}
  halfadder (one  × one):  ${m.halfadder(new s.Pair(m.ONE, m.ONE))}
`)
