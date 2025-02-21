// 1662. Check If Two String Arrays are Equivalent

const arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((a, b) => a + b) === word2.reduce((a, b) => a + b);
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
