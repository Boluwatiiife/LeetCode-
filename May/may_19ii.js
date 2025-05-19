// 1616. Split Two Strings to Make Palindrome

const checkPalindromeFormation = function (a, b) {
  function palindromee(word, left, right) {
    while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  const n = a.length;

  function checkkk(a, b) {
    let i = 0;
    let j = n - 1;

    while (i < j && a[i] === b[j]) {
      i++;
      j--;
    }
    return palindromee(a, i, j) || palindromee(b, i, j);
  }
  return checkkk(a, b) || checkkk(b, a);
};

console.log(checkPalindromeFormation("x", "y"));
console.log(checkPalindromeFormation("xbdef", "xecab"));
console.log(checkPalindromeFormation("ulacfd", "jizalu"));
console.log(checkPalindromeFormation("abffef", "fecfab"));
console.log(
  checkPalindromeFormation(
    "aejbaalflrmkswrydwdkdwdyrwskmrlfqizjezd",
    "uvebspqckawkhbrtlqwblfwzfptanhiglaabjea"
  )
);
console.log(
  checkPalindromeFormation(
    "fgixkdymrtiqifbmwjhuwdukaqfjekzckyjyxfbdiswmmwsidbfxyjykczkejfqakudwuhjwmbfizciijajfncqy",
    "yqcnfjajiiczbzgcziiriyhfxlqrdtijusntxzazzxncqnuyryrognehxsgkmkzgtmtpdpkffxqvgtmcifissukj"
  )
);
