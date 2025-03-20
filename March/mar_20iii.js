// 3158. Find the XOR of Numbers Which Appear Twice

const duplicateNumbersXOR = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let xorr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      xorr ^= nums[i];
    }
  }
  return xorr;
};

console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));
console.log(duplicateNumbersXOR([1, 4, 4]));
console.log(duplicateNumbersXOR([10, 18, 7, 10, 18]));
