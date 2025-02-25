// 1935. Maximum Number of Words You Can Type

const canBeTypedWords = function (text, brokenLetters) {
  let word = text.split(" ");
  let count = word.length;

  for (char of word) {
    for (xx of brokenLetters) {
      if (char.includes(xx)) {
        count--;
        break;
      }
    }
  }
  return count;
};

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
console.log(canBeTypedWords("leet code", "e"));
