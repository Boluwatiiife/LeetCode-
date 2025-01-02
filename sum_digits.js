// 1945. Sum of Digits of String After Convert

/*
You are given a string s consisting of lowercase English letters, and an integer k. Your task is to convert the string into an integer by a special process, and then transform it by summing its digits repeatedly k times. More specifically, perform the following steps:

Convert s into an integer by replacing each letter with its position in the alphabet (i.e. replace 'a' with 1, 'b' with 2, ..., 'z' with 26).
Transform the integer by replacing it with the sum of its digits.
Repeat the transform operation (step 2) k times in total.
For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.
*/

const getLucky = function (s, k) {
  let digits = "";

  for (let i = 0; i < s.length; i++) {
    const value_of_letter = s.charCodeAt(i) - 96;
    digits = digits + value_of_letter;
  }
  //   let numberr = parseInt(digits);
  let numberr = digits
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  for (let j = 1; j < k; j++) {
    numberr = numberr
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
  }
  return numberr;
};

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
console.log(getLucky("zbax", 2));
console.log(getLucky("dbvmfhnttvr", 5));
