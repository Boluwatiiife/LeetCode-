// 3701. Compute Alternating Sum

const alternatingSum = function (nums) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      ans += nums[i];
    } else {
      ans -= nums[i];
    }
  }

  return ans;
};

console.log(alternatingSum([1, 3, 5, 7]));
console.log(alternatingSum([100]));
