// 2333. Minimum Sum of Squared Difference

const minSumSquareDiff = function (nums1, nums2, k1, k2) {
  k = k1 + k2;
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    arr.push(Math.abs(nums1[i] - nums2[i]));
  }

  let left = 0;
  let right = Math.max(...arr);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (const no of arr) {
      if (no > mid) {
        sum += no - mid;
      }
    }
    if (sum <= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  const freq = new Array(Math.max(...arr) + 1).fill(0);
  for (let a of arr) {
    freq[a]++;
  }

  for (let i = freq.length - 1; i > left && k > 0; i--) {
    const temp = Math.min(freq[i], k);
    freq[i - 1] += temp;
    freq[i] -= temp;
    k -= temp;
  }

  if (k > 0) {
    const moveLeft = Math.min(freq[left], k);
    freq[left] -= moveLeft;
    freq[left - 1] += moveLeft;
    k -= moveLeft;
  }

  let ans = 0n;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
      ans += BigInt(freq[i]) * BigInt(i) * BigInt(i);
    }
  }
  return Number(ans);
};

console.log(minSumSquareDiff([1, 2, 3, 4], [2, 10, 20, 19], 0, 0));
console.log(minSumSquareDiff([1, 4, 10, 12], [5, 8, 6, 9], 1, 1));
console.log(minSumSquareDiff([1, 4, 10, 12], [5, 8, 6, 9], 10, 5));
