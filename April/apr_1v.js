// 152. Maximum Product Subarray

const maxProduct = function (nums) {
  let maxx = nums[0];
  let curr_max = nums[0],
    curr_min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num < 0) [curr_max, curr_min] = [curr_min, curr_max];

    curr_max = Math.max(num, num * curr_max);
    curr_min = Math.min(num, num * curr_min);

    maxx = Math.max(maxx, curr_max);
  }

  return maxx;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
