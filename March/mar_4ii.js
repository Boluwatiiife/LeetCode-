// 2255. Count Prefixes of a Given String

const countPrefixes = function (words, s) {
  return words.filter((word) => s.startsWith(word)).length;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
console.log(countPrefixes(["a", "a"], "aa"));
