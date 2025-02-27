// 2000. Reverse Prefix of Word

const reversePrefix = function (word, ch) {
  let prefixx = "";

  for (char of word) {
    prefixx += char;
    word = word.replace(char, "");
    if (char === ch) break;
  }
  let rever = prefixx.split("").reverse().join("");

  if (!prefixx.includes(ch)) return prefixx;
  return rever + word;
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));
console.log(reversePrefix("rzwuktxcjfpamlonbgyieqdvhs", "s"));
