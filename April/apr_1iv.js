// 151. Reverse Words in a String

const reverseWords = function (s) {
  let word = s
    .split(" ")
    .filter((xx) => xx !== "")
    .reverse();

  let sentence = word[0];

  for (let i = 1; i < word.length; i++) {
    sentence += ` ${word[i]}`;
  }

  return sentence;
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
