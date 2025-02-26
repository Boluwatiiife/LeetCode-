// 1945. Sum of Digits of String After Convert

const getLucky = function (s, k) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let indexx = "";
  for (char of s) {
    indexx = indexx + (alpha.indexOf(char) + 1).toString();
  }

  let times = k;

  while (times > 0) {
    let arr = indexx.split("");
    let sum = arr.reduce((a, b) => Number(a) + Number(b));
    indexx = sum.toString();
    times--;
  }

  return Number(indexx);
};

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
console.log(getLucky("zbax", 2));
console.log(getLucky("boluwatife", 1));
