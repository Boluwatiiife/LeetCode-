// 1684. Count the Number of Consistent Strings

/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
*/

const countConsistentStrings = function (allowed, words) {
  let word = allowed;
  let output = 0;

  for (let i = 0; i < words.length; i++) {
    const string = words[i];
    for (const char of string) {
      if (!word.includes(char)) {
        output = output + 0;
      } else {
        output = +1;
      }
    }
    // output = +1;
  }
  return output;
};

console.log(countConsistentStrings("ab", ["ab", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
