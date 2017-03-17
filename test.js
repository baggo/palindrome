var test = require('tape')
var palin = require('./')

test('checks palindromes', t => {
  t.plan(3)

  t.true(palin('kek'), 'palindrome 1')
  t.true(palin('racecar'), 'palindrome 2')
  t.false(palin('meme'), 'not palindrome')

})
