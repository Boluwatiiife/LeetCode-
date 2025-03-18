// 3010. Divide an Array Into Subarrays With Minimum Cost I

const minimumCost = function (nums) {
  let xx = nums[0];
  nums.sort((a, b) => a - b);
  if (nums.length === 3) return nums.reduce((a, b) => a + b);
  if (nums[0] === xx) return xx + nums[1] + nums[2];
  let arr = [nums[0], nums[1], nums[2]];
  if (arr.includes(xx)) return arr.reduce((a, b) => a + b);
  return xx + nums[0] + nums[1];
};

console.log(minimumCost([1, 2, 3, 12]));
console.log(minimumCost([5, 4, 3]));
console.log(minimumCost([10, 3, 1, 1]));
