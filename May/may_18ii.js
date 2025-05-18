// 1498. Number of Subsequences That Satisfy the Given Sum Condition

const numSubseq = function (nums, target) {
  const mod = 1e9 + 7;
  //   return [4 % mod, (4 + 1) % mod];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // precompute powers of 2 to nums.length
  const power2 = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    power2[i] = (power2[i - 1] * 2) % mod;
  }

  let left = 0;
  let right = n - 1;
  let count = 0;

  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      count = (count + power2[right - left]) % mod;
      left++;
    } else right--;
  }
  return count;
};

console.log(numSubseq([3, 5, 6, 7], 9));
console.log(numSubseq([3, 3, 6, 8], 10));
console.log(numSubseq([2, 3, 3, 4, 6, 7], 12));
