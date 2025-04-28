// 2302. Count Subarrays With Score Less Than K

const countSubarrays = function (nums, k) {
  let count = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum * (right - left + 1) >= k) {
      sum -= nums[left];
      left++;
    }
    count += right - left + 1;
  }

  return count;
};

console.log(countSubarrays([2, 1, 4, 3, 5], 10));
console.log(countSubarrays([1, 1, 1], 5));
