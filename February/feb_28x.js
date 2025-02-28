// 2085. Count Common Words With One Occurrence

const countWords = function (words1, words2) {
  let first_arr = new Map();
  let second_arr = new Map();
  let full = [...words1, ...words2];

  for (char of words1) {
    first_arr.set(char, (first_arr.get(char) || 0) + 1);
  }
  for (char of words2) {
    second_arr.set(char, (second_arr.get(char) || 0) + 1);
  }

  let output = 0;
  for (let i = 0; i < full.length; i++) {
    if (words1.includes(full[i]) && words2.includes(full[i])) {
      if (first_arr.get(full[i]) === 1 && second_arr.get(full[i]) === 1) {
        output++;
      }
    }
  }

  return output / 2;
};

console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);
console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]));
console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]));
