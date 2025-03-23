// 3427. Sum of Variable Length Subarrays

const subarraySum = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);
    let xx = nums.slice(start, i + 1);
    let no = xx.reduce((a, b) => a + b, 0);
    sum += no;
  }
  return sum;
};

console.log(subarraySum([2, 3, 1]));
console.log(subarraySum([3, 1, 1, 2]));
