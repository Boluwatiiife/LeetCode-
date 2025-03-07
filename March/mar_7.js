// 2335. Minimum Amount of Time to Fill Cups

const fillCups = function (amount) {
  let nums = amount.sort((a, b) => b - a);

  if (nums[0] > nums[1] + nums[2]) {
    return nums[0];
  }

  return Math.ceil((nums[0] + nums[1] + nums[2]) / 2);
};

console.log(fillCups([1, 4, 2]));
console.log(fillCups([5, 4, 4]));
console.log(fillCups([5, 0, 0]));
console.log(fillCups([0, 2, 2]));
