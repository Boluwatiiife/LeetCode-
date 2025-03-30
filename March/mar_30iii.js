// 75. Sort Colors

const sortColors = function (nums) {
  let arr = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
