// 1712. Ways to Split Array Into Three Subarrays

const waysToSplit = function (nums) {
  const mod = 1e9 + 7;
  const n = nums.length;
  const prefixSum = Array(n).fill(0);

  // build prefix sum
  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  let result = 0;
  let j = 0,
    k = 0;

  for (let i = 0; i < n - 2; i++) {
    const leftSum = prefixSum[i];

    // move j to where >= left sum
    j = Math.max(j, i + 1);
    while (j < n - 1 && prefixSum[j] - leftSum < leftSum) {
      j++;
    }

    // move k to whre midsum <= right sum
    k = Math.max(k, j);
    while (
      k < n - 1 &&
      prefixSum[k] - leftSum <= prefixSum[n - 1] - prefixSum[k]
    ) {
      k++;
    }
    result = (result + (k - j)) % mod;
  }
  return result;
};

console.log(waysToSplit([1, 1, 1]));
console.log(waysToSplit([1, 2, 2, 2, 5, 0]));
console.log(waysToSplit([3, 2, 1]));
