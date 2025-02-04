// 1800. Maximum Ascending Subarray Sum

const maxAscendingSum = function (nums) {
  let maxx = nums[0];
  let currr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currr = currr + nums[i];
      maxx = Math.max(currr, maxx);
    } else {
      currr = nums[i];
    }
  }
  return maxx;
  // return Math.max(maxx, currr);
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum([100, 10, 1]));
