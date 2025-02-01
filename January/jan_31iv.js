// 680 Valid Palindrome II

const validPalindrome = function (s) {
  const strr = s.split("");
  return strr;
  let reves = strr.reverse().join("");
  // if (rever === s) {
  //   return true;
  // }
  return strr;
  for (let i = 0; i < strr.length; i++) {
    // let reves = strr.reverse().join("");
    if (reves === strr.join("")) {
      return true;
    } else {
      strr.splice(i, 1);
      i++;
    }
    // return reves;
  }
  return false;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
