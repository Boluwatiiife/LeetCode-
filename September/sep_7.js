/// 152. Maximum Product Subarray

const maxProduct = function (nums) {
  let maxx = nums[0],
    minn = nums[0];

  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let maaaaa = nums[i] * maxx;
    let miiiii = nums[i] * minn;
    ans = Math.max(ans, maaaaa, miiiii, nums[i]);

    maxx = Math.max(nums[i], maaaaa, miiiii);
    minn = Math.min(nums[i], miiiii, maaaaa);
  }

  return ans;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4])); // 24
console.log(maxProduct([-1, -2, -9, -6])); // 108
