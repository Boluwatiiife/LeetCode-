// 3350. Adjacent Increasing Subarrays Detection II

const maxIncreasingSubarrays = function (nums) {
  const n = nums.length;

  let arr = new Array(n).fill(0);
  arr[n - 1]++;
  let count = 1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      count++;
      arr[i] += count;
    } else {
      count = 1;
      arr[i] += count;
    }
  }
  let left = 1,
    right = Math.floor(n / 2),
    ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      ans = Math.max(mid, ans);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  function check(mid) {
    for (let i = 0; i + 2 * mid <= n; i++) {
      if (arr[i] >= mid && arr[i + mid] >= mid) {
        return true;
      }
    }
    return false;
  }
  return ans;
};

console.log(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1]));
console.log(maxIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7]));
