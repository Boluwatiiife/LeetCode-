// 3042. Count Prefix and Suffix Pairs I

const countPrefixSuffixPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && i < j) {
        let arr = words[j].split("");
        let n = words[i].length;
        let pree = arr.slice(0, n);
        let suff = arr.slice(arr.length - n);
        pree = pree.join("");
        suff = suff.join("");
        if (words[i] === pree && words[i] === suff) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]));
console.log(countPrefixSuffixPairs(["abab", "ab"]));
