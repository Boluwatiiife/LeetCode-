// 680. Valid Palindrome II

const validPalindrome = function (s) {
  let ccc = s.split("");
  let xxx = ccc.reverse().join("");
  if (s === xxx) return true;
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    arr.splice(i, 1);

    let word = arr.join("");
    let neww = arr.reverse().join("");
    if (word === neww) {
      return true;
    }
    arr = word.split("");
    arr.splice(i, 0, letter);
  }

  return false;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("abbccccbb"));

// my solution works but exceeded timelimit for a very long word

// time effficient solution

const palindromee = function (s) {
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
console.log(palindromee("aba"));
console.log(palindromee("abca"));
console.log(palindromee("abc"));
console.log(palindromee("abbccccbb"));
