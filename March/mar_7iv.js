// 2351. First Letter to Appear Twice

const repeatedCharacter = function (s) {
  let arr = new Map();

  for (char of s) {
    if (arr.get(char) === 1) {
      return char;
    } else {
      arr.set(char, (arr.get(char) || 0) + 1);
    }
  }
  return "";
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
console.log(repeatedCharacter("abcd"));
