// 2108. Find First Palindromic String in the Array

const firstPalindrome = function (words) {
  let temp = "";

  for (let x = 0; x < words.length; x++) {
    let arr = words[x].split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      temp += arr[i];
    }
    if (temp === words[x]) {
      return temp;
    } else {
      temp = "";
    }
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));
