// 2544. Alternating Digit Sum

const alternateDigitSum = function (n) {
  let stri = n.toString();
  let nums = [];
  for (no of stri) {
    nums.push(Number(no));
  }

  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      arr.push(nums[i]);
    } else {
      arr.push(0 - nums[i]);
    }
  }

  return arr.reduce((a, b) => a + b);
};

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(111));
console.log(alternateDigitSum(886996));
