// 2765. Longest Alternating Subarray

const alternatingSubarray = function (nums) {
  let ans = -1;
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    let k = 1;
    let j = i;
    for (; j + 1 < n && nums[j + 1] - nums[j] === k; ++j) {
      k *= -1;
    }
    if (j - i + 1 > 1) {
      ans = Math.max(ans, j - i + 1);
    }
  }
  return ans;
};

console.log(alternatingSubarray([2, 3, 4, 3, 4]));
console.log(alternatingSubarray([4, 5, 6]));
console.log(alternatingSubarray([21, 9, 5]));
console.log(alternatingSubarray([42, 43, 44, 43, 44, 43, 44, 45, 46]));
console.log(alternatingSubarray([14, 30, 29, 49, 3, 23, 44, 21, 26, 52]));
console.log(alternatingSubarray([6, 12, 2, 3, 8, 9, 10, 10, 2, 1]));
console.log(alternatingSubarray([13, 14, 15, 14]));
console.log(alternatingSubarray([14, 30, 29, 49, 3, 23, 44, 21, 26, 52]));
