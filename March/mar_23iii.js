// 3423. Maximum Difference Between Adjacent Elements in a Circular Array

const maxAdjacentDistance = function (nums) {
  nums.push(nums[0]);

  let maxx = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let no = Math.abs(nums[i] - nums[i + 1]);
    maxx = Math.max(maxx, no);
  }

  return maxx;
};

console.log(maxAdjacentDistance([1, 2, 4]));
console.log(maxAdjacentDistance([-5, -10, -5]));
