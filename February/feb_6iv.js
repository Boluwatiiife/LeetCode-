// 1005. Maximize Sum Of Array After K Negations

const largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let i = 0;
  while (k > 0 && i < nums.length && nums[i] < 0) {
    nums[i] = -nums[i];
    k--;
    i++;
  }
  let min_num = Math.min(...nums);

  if (k % 2 === 1) {
    let index = nums.indexOf(min_num);
    nums[index] = -nums[index];
  }
  return nums.reduce((a, b) => a + b);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
