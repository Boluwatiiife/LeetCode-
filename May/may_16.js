// 962. Maximum Width Ramp

const maxWidthRamp = function (nums) {
  const stack = [];
  const n = nums.length;
  let max = 0;

  // build decreasing stack of indices
  for (let i = 0; i < n; i++) {
    if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }
  //traverse from right to left and update max
  for (let j = n - 1; j >= 0; j--) {
    while (stack.length > 0 && nums[j] >= nums[stack[stack.length - 1]]) {
      const i = stack.pop();
      max = Math.max(max, j - i);
    }
  }
  return max;
};

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]));
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]));
console.log(maxWidthRamp([9, 8, 1]));
console.log(maxWidthRamp([2, 2, 1]));
