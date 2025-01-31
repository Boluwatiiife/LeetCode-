// 674. Longest Continuous Increasing Subsequence

const findLengthOfLCIS = function (nums) {
  let maxxx = 0;
  let currentt = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      currentt++;
      maxxx = Math.max(maxxx, currentt);
    } else {
      currentt = 1;
    }
  }
  return Math.max(maxxx, currentt);
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([2, 1, 3]));
console.log(findLengthOfLCIS([2, 3, 4, 4, 2, 3, 4, 7]));
