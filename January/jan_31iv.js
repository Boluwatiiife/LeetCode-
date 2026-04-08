// 680 Valid Palindrome II

const validPalindrome = function (s) {
  let arr = s.split("");

  let dd = arr.join("");
  let xxx = arr.reverse();
  // return [dd, xxx.join("")];
  if (dd === xxx.join("")) return true;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    arr.splice(i, 1);
    let temp = arr.join("");
    let rever = arr.reverse();
    let joinn = rever.join("");

    arr = temp.split("");
    arr.splice(i, 0, char);

    if (temp === joinn) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
