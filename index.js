module.exports = function(word){
  for (var m = word.length, i = ~~(m-- / 2); i--;)
    if (word[i] !== word[m - i]) return false
  return true
}
