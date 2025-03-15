// 2908. Minimum Sum of Mountain Triplets I

const minimumSum = function (nums) {
  let min_sum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i < j && j < k) {
          if (nums[i] < nums[j] && nums[k] < nums[j]) {
            let sum = nums[i] + nums[j] + nums[k];
            min_sum = Math.min(min_sum, sum);
          }
        }
      }
    }
  }
  return min_sum === Infinity ? -1 : min_sum;
};

console.log(minimumSum([8, 6, 1, 5, 3]));
console.log(minimumSum([5, 4, 8, 7, 10, 2]));
console.log(minimumSum([6, 5, 4, 3, 4, 5]));
