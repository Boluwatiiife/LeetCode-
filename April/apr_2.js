// 164. Maximum Gap

const maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let maxx = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    maxx = Math.max(diff, maxx);
  }

  return maxx;
};

console.log(maximumGap([3, 6, 9, 1]));
console.log(maximumGap([10]));
