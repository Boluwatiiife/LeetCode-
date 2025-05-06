// 125. Valid Palindrome

const isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let j = s.length - 1;

  for (let i = 0; i < j; i++) {
    if (s[i] !== s[j]) return false;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
