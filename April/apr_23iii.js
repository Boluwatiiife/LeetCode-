// 930. Binary Subarrays With Sum

const at_most = (arr, k) => {
  if (k < 0) return 0;
  let n = arr.length;
  let count = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }
    count += right - left + 1;
  }
  return count;
};

const numSubarraysWithSum = function (nums, goal) {
  return at_most(nums, goal) - at_most(nums, goal - 1);
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
