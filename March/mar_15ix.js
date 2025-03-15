// 864. Maximum Odd Binary Number

const maximumOddBinaryNumber = function (s) {
  let one = 0,
    zero = 0;
  for (no of s) {
    if (no === "1") {
      one++;
    } else {
      zero++;
    }
  }
  let anss = "";
  for (let i = 0; i < one - 1; i++) {
    anss += "1";
  }
  for (let i = 0; i < zero; i++) {
    anss += "0";
  }

  return anss + "1";
};

console.log(maximumOddBinaryNumber("010"));
console.log(maximumOddBinaryNumber("0101"));
console.log(maximumOddBinaryNumber("0101001"));
