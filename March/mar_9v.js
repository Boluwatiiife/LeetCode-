// 2506. Count Pairs Of Similar Strings

const similarPairs = function (words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    words[i] = new Set(words[i]);
    words[i] = [...words[i]].sort().join("");
    arr.push(words[i]);
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        count++;
      }
    }
  }
  return count / 2;
};

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]));
console.log(similarPairs(["aabb", "ab", "ba"]));
console.log(similarPairs(["nba", "cba", "dba"]));
