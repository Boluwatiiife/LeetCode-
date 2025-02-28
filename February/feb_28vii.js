// 2068. Check Whether Two Strings are Almost Equivalent

const checkAlmostEquivalent = function (word1, word2) {
  let one_count = {};
  let two_count = {};

  for (char of word1) {
    one_count[char] = (one_count[char] || 0) + 1;
  }
  for (char of word2) {
    two_count[char] = (two_count[char] || 0) + 1;
  }

  for (let char_code = 97; char_code <= 122; char_code++) {
    const letter = String.fromCharCode(char_code);
    const diff = Math.abs((one_count[letter] || 0) - (two_count[letter] || 0));

    if (diff > 3) return false;
  }
  return true;
};

console.log(checkAlmostEquivalent("aaaa", "bccb"));
console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
console.log(checkAlmostEquivalent("cccddabba", "babababab"));
