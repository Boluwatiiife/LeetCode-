// Valid Palindrome

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = function (s) {
  let lowercasee = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversed_arr = lowercasee.split("").reverse().join("");
  if (lowercasee === reversed_arr) {
    return true;
  }
  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
