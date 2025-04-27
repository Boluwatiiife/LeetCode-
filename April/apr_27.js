// 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

const longestSubarray = function (nums, limit) {
  let n = nums.length;
  const max_deque = [];
  const min_deque = [];
  let left = 0;
  let max = 0;

  for (right = 0; right < n; right++) {
    while (
      max_deque.length &&
      nums[right] > nums[max_deque[max_deque.length - 1]]
    ) {
      max_deque.pop();
    }
    max_deque.push(right);

    while (
      min_deque.length &&
      nums[right] < nums[min_deque[min_deque.length - 1]]
    ) {
      min_deque.pop();
    }
    min_deque.push(right);

    while (nums[max_deque[0]] - nums[min_deque[0]] > limit) {
      if (max_deque[0] === left) max_deque.shift();
      if (min_deque[0] === left) min_deque.shift();
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(longestSubarray([8, 2, 4, 7], 4));
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 2));
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));
