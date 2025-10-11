// 918. Maximum Sum Circular Subarray

const maxSubarraySumCircular = function (nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  let curr_max = 0,
    maxSoFar = -Infinity;
  let curr_min = 0,
    minSofar = Infinity;

  for (const no of nums) {
    curr_max = Math.max(no, curr_max + no);
    maxSoFar = Math.max(maxSoFar, curr_max);

    curr_min = Math.min(no, curr_min + no);
    minSofar = Math.min(minSofar, curr_min);
  }

  return maxSoFar < 0 ? maxSoFar : Math.max(maxSoFar, totalSum - minSofar);
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));
console.log(maxSubarraySumCircular([-3, -2, -3]));
console.log(maxSubarraySumCircular([1, 2, -3, 4, 5]));
console.log(maxSubarraySumCircular([-7, 1, 2, 7, -2, -5]));
console.log(maxSubarraySumCircular([3, -1, 2, -1]));
console.log(maxSubarraySumCircular([1, -2, 3, -2]));
