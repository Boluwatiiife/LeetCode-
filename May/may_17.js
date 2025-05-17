// 1048. Longest String Chain

const longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  let map = new Map();
  let max = 1;

  for (const word of words) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
      const pred = word.slice(0, i) + word.slice(i + 1);
      count = Math.max(count, (map.get(pred) || 0) + 1);
    }
    map.set(word, count);
    max = Math.max(max, count);
  }
  return max;
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
console.log(longestStrChain(["abcd", "dbqca"]));
console.log(longestStrChain(["a", "ab", "ac", "bd", "abc", "abd", "abdd"]));
console.log(longestStrChain(["bdca", "bda", "ca", "dca", "a"]));
