// 1400. Construct K Palindrome Strings
/*
Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

 

Example 1:

Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
Example 2:

Input: s = "leetcode", k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.
Example 3:

Input: s = "true", k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.
*/

const canConstruct = function (s, k) {
  // Step 1: Count the frequency of each character
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Step 2: Count characters with odd frequencies
  let oddCount = 0;
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // Step 3: Check conditions
  // (a) If there are more odd frequencies than k, return false
  if (oddCount > k) return false;

  // (b) If k is greater than the length of the string, return false
  if (k > s.length) return false;

  // Otherwise, return true
  return true;
};

console.log(canConstruct("annabelle", 2));
console.log(canConstruct("leetcode", 3));
console.log(canConstruct("true", 4));
