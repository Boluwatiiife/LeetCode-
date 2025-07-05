// 521. Longest Uncommon Subsequence I

const findLUSlength = function (a, b) {
  if (a === b) return -1;
  return a.length >= b.length ? a.length : b.length;
};

console.log(findLUSlength("aba", "cdc"));
console.log(findLUSlength("aaa", "bbb"));
console.log(findLUSlength("aaa", "aaa"));
