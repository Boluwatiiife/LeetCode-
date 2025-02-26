// 1967. Number of Strings That Appear as Substrings in Word

const numOfStrings = function (patterns, word) {
  let count = 0;

  for (char of patterns) {
    if (word.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb"));
console.log(numOfStrings(["a", "a", "a"], "ab"));
