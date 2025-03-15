// 2859. Sum of Values at Indices With K Set Bits

const sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = i.toString(2).split("");
    let count = 0;
    for (no of temp) {
      if (no === "1") {
        count++;
      }
    }
    if (count === k) {
      sum += nums[i];
    }
  }
  return sum;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2));
