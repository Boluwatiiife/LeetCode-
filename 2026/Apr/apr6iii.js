// 3838. Weighted Word Mapping

const mapWordWeights = function (words, weights) {
  const lowercase = "zyxwvutsrqponmlkjihgfedcba";
  let ans = "";

  for (const word of words) {
    let sum = 0;
    for (char of word) {
      sum += weights[char.charCodeAt() - 97];
    }
    ans += lowercase[sum % 26];
  }

  return ans;
};
console.log(
  mapWordWeights(
    ["abcd", "def", "xyz"],
    [
      5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3,
      7, 7, 2,
    ],
  ),
);

console.log(
  mapWordWeights(
    ["a", "b", "c"],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1,
    ],
  ),
);
console.log(
  mapWordWeights(
    ["abcd"],
    [
      7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4,
      4, 5,
    ],
  ),
);
