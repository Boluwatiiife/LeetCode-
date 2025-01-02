//  476. Number Complement

/**
 * 
The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer num, return its complement.
 */

const compliment = function (num) {
  const binary = num.toString(2);
  array_of_binary = [];
  for (let i = 0; i < binary.length; i++) {
    array_of_binary.push(binary[i]);
  }
  arry_of_compliment = [];
  for (let i = 0; i < array_of_binary.length; i++) {
    if (array_of_binary[i] === "1") {
      arry_of_compliment.push("0");
    }
    if (array_of_binary[i] === "0") {
      arry_of_compliment.push("1");
    }
  }
  const numm = arry_of_compliment.join("");
  const decimal = parseInt(numm, 2);
  return decimal;
};

console.log(compliment(5));
console.log(compliment(2));
console.log(compliment(42));
