// 2185. Counting Words With a Given Prefix
/*
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

 

Example 1:

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
*/

const prefixCount = function (words, pref) {
  let word = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      word += 1;
    }
  }
  return word;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));
console.log(prefixCount(["bolu", "backend", "engineer", "buck", "build"], "b"));
