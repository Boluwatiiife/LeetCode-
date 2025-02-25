// 1941. Check if All Characters Have Equal Number of Occurrences

const areOccurrencesEqual = function (s) {
  let count = new Map();

  for (char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  let arr = [...count.values()];
  let uniquee = new Set(arr);

  return [...uniquee].length === 1;
};

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));
