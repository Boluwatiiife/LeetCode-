// 1248. Count Number of Nice Subarrays

const numberOfSubarrays = function (nums, k) {
  const at_most = (kk) => {
    const n = nums.length;
    let count = 0;
    let odd = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
      if (nums[right] % 2 === 1) odd++;

      while (odd > kk) {
        if (nums[left] % 2 === 1) odd--;
        left++;
      }
      count += right - left + 1;
    }
    return count;
  };

  return at_most(k) - at_most(k - 1);
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 4, 6], 1));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
