// 1493. Longest Subarray of 1's After Deleting One Element

const longestSubarray = function (nums) {
  let n = nums.length;
  let maxx = 0;
  let left = 0;
  let zero = 0;

  for (let right = 0; right < n; right++) {
    let no = nums[right];
    if (no === 0) zero++;

    while (zero > 1) {
      if (nums[left] === 0) zero--;
      left++;
    }

    maxx = Math.max(maxx, right - left + 1);
  }

  return maxx - 1;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
console.log(longestSubarray([1, 1, 1, 1, 0, 1, 1, 0, 1, 1]));
