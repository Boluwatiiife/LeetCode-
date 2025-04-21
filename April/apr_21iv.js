// 413. Arithmetic Slices

const numberOfArithmeticSlices = function (nums) {
  let n = nums.length;
  let total = 0;
  let curr = 0;

  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      curr++;
      total += curr;
    } else {
      curr = 0;
    }
  }

  return total;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1]));
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5]));
console.log(numberOfArithmeticSlices([1, 3, 3, 4, 5]));
