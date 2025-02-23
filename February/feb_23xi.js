// 1832. Check if the Sentence Is Pangram

const checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz"));
