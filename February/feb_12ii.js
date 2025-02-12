// 1332. Remove Palindromic Subsequences

const removePalindromeSub = function (s) {
  if (s === s.split("").reverse().join("")) return 1;

  return 2;
};

console.log(removePalindromeSub("ababa"));
console.log(removePalindromeSub("abb"));
console.log(removePalindromeSub("baabb"));
