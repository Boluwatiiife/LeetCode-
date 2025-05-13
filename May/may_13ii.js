// 95. Number of Subarrays with Bounded Maximum

const numSubarrayBoundedMax = function (nums, left, right) {
  const n = nums.length;
  function countLessOrEqual(bound) {
    let count = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
      if (nums[end] <= bound) {
        count += end - start + 1;
      } else {
        start = end + 1;
      }
    }
    return count;
  }
  return countLessOrEqual(right) - countLessOrEqual(left - 1);
};

console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3));
console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8));
