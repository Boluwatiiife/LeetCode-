// 2697. Lexicographically Smallest Palindrome

const makeSmallestPalindrome = function (s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      let temp = arr[arr.length - i - 1];
      if (arr[i] > temp) {
        arr[i] = temp;
      } else if (temp > arr[i]) {
        arr[arr.length - i - 1] = arr[i];
      }
    }
  }

  return arr.join("");
};

console.log(makeSmallestPalindrome("egcfe"));
console.log(makeSmallestPalindrome("abcd"));
console.log(makeSmallestPalindrome("seven"));
console.log(makeSmallestPalindrome("bolu"));
