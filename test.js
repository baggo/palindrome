var test = require('tape')
var palin = require('./')

test('checks palindromes', t => {
  t.plan(3)

  t.true(palin('lolol'), 'palindrome 1')
  t.true(palin('tacocat'), 'palindrome 2')
  t.false(palin('meme'), 'not palindrome')
  t.false(palin('plump'), 'not palindrome')

})
