module.exports = function valid (word) {
  for (var m = word.length, i = Math.floor(m / 2); i--;)
    if (word[i] !== word[m - i - 1]) return false;
  return true
}
