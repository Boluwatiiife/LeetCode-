//  1408. String Matching in an Array

/*

Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

 

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
*/

const stringMatching = function (words) {
  let result = [];
  for (let x = 0; x < words.length; x++) {
    for (let y = 0; y < words.length; y++) {
      if (x !== y && words[x].includes(words[y])) {
        result.push(words[y]);
      }
    }
  }
  const uniqueResult = [...new Set(result)];
  return uniqueResult;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcode", "et", "code"]));
console.log(stringMatching(["blue", "green", "bu"]));
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));
