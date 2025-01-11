// 58. length of Last Word

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 */

const lengthOfLastWord = function (s) {
  let wordss = s.split(" ");
  let result = 0;
  let new_wordss = wordss.filter((word) => word !== "");
  for (let i = 0; i < new_wordss.length; i++) {
    let last_word = new_wordss[new_wordss.length - 1];
    result = last_word.length;
  }
  return result;
};
console.log(lengthOfLastWord("Hello world"));
console.log(lengthOfLastWord("fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("i will be great, top rated backend dev!  "));
