// 1170. Compare Strings by Frequency of the Smallest Character

const numSmallerByFrequency = function (queries, words) {
  function smallest(word) {
    let map = new Map();
    let min = "z";

    for (const char of word) {
      if (char < min) min = char;
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map.get(min);
  }
  let arr = [];
  for (const word of words) {
    arr.push(smallest(word));
  }
  arr.sort((a, b) => a - b);
  let ans = [];
  for (const word of queries) {
    let no = smallest(word);
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      let temp = arr[mid];
      if (temp > no) right = mid - 1;
      else left = mid + 1;
    }
    ans.push(arr.length - left);
  }
  return ans;
};

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]));
console.log(
  numSmallerByFrequency(
    [
      "bba",
      "abaaaaaa",
      "aaaaaa",
      "bbabbabaab",
      "aba",
      "aa",
      "baab",
      "bbbbbb",
      "aab",
      "bbabbaabb",
    ],
    [
      "aaabbb",
      "aab",
      "babbab",
      "babbbb",
      "b",
      "bbbbbbbbab",
      "a",
      "bbbbbbbbbb",
      "baaabbaab",
      "aa",
    ]
  )
);
