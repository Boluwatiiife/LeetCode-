// 976. Largest Perimeter Triangle

const largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i + 2] + nums[i + 1] > nums[i]) {
      return nums[i + 2] + nums[i + 1] + nums[i];
    }
  }

  return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
console.log(largestPerimeter([5, 4, 3, 1, 2, 8]));
