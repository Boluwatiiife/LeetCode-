// 2958. Length of Longest Subarray With at Most K Frequency

const maxSubarrayLength = function (nums, k) {
  const n = nums.length;
  let map = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < n; right++) {
    let no = nums[right];
    map.set(no, (map.get(no) || 0) + 1);

    while (map.get(no) > k) {
      let left_most = nums[left];
      map.set(left_most, map.get(left_most) - 1);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4));
