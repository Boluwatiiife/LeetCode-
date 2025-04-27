// 1838. Frequency of the Most Frequent Element

const maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let sum = 0;
  let maxx = 0;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (nums[right] * (right - left + 1) - sum > k) {
      sum -= nums[left++];
    }
    maxx = Math.max(maxx, right - left + 1);
  }
  return maxx;
};

console.log(maxFrequency([1, 2, 4], 5)); // 3
console.log(maxFrequency([1, 4, 8, 13], 5)); // 2
console.log(maxFrequency([3, 9, 6], 2)); // 1
