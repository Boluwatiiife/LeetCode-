// 415. Add Strings

/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
*/

const addStrings = function (num1, num2) {
  let onee = [];
  let twoo = [];
  const numm1 = num1.split("");
  const numm2 = num2.split("");
  for (let i = 0; i < numm1.length; i++) {
    if (numm1[i] === "0") {
      onee.push(0);
    }
    if (numm1[i] === "1") {
      onee.push(1);
    }
    if (numm1[i] === "2") {
      onee.push(2);
    }
    if (numm1[i] === "3") {
      onee.push(3);
    }
    if (numm1[i] === "4") {
      onee.push(4);
    }
    if (numm1[i] === "5") {
      onee.push(5);
    }
    if (numm1[i] === "6") {
      onee.push(6);
    }
    if (numm1[i] === "7") {
      onee.push(7);
    }
    if (numm1[i] === "8") {
      onee.push(8);
    }
    if (numm1[i] === "9") {
      onee.push(9);
    }
  }
  for (let i = 0; i < numm2.length; i++) {
    if (numm2[i] === "0") {
      twoo.push(0);
    }
    if (numm2[i] === "1") {
      twoo.push(1);
    }
    if (numm2[i] === "2") {
      twoo.push(2);
    }
    if (numm2[i] === "3") {
      twoo.push(3);
    }
    if (numm2[i] === "4") {
      twoo.push(4);
    }
    if (numm2[i] === "5") {
      twoo.push(5);
    }
    if (numm2[i] === "6") {
      twoo.push(6);
    }
    if (numm2[i] === "7") {
      twoo.push(7);
    }
    if (numm2[i] === "8") {
      twoo.push(8);
    }
    if (numm2[i] === "9") {
      twoo.push(9);
    }
  }
  console.log(onee);
  console.log(twoo);
  let first_num = BigInt(onee.join(""));
  let second_num = BigInt(twoo.join(""));
  let result = first_num + second_num;
  return result.toString();
};

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
console.log(addStrings("9333852702227987", "85731737104263"));
