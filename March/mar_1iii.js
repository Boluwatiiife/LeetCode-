// 2460. Apply Operations to an Array

const applyOperations = function (nums) {
  let zero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
    if (nums[i] === 0) {
      zero++;
    }
  }
  let arr = nums.filter((xx) => xx !== 0);
  for (let i = 0; i < zero; i++) {
    arr.push(0);
  }
  return arr;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
