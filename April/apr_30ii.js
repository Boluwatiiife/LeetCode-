// 2653. Sliding Subarray Beauty

const getSubarrayBeauty = function (nums, k, x) {
  const n = nums.length;
  const freq = new Array(101).fill(0);
  let arr = [];
  let left = 0;

  for (let right = 0; right < n; right++) {
    freq[nums[right] + 50]++;

    if (right - left + 1 === k) {
      let count = 0,
        beauty = 0;

      for (let i = 0; i < 50; i++) {
        count += freq[i];
        if (count >= x) {
          beauty = i - 50;
          break;
        }
      }
      arr.push(count >= x ? beauty : 0);
      freq[nums[left] + 50]--;
      left++;
    }
  }
  return arr;
};

console.log(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 2));
console.log(getSubarrayBeauty([-1, -2, -3, -4, -5], 2, 2));
console.log(getSubarrayBeauty([-3, 1, 2, -3, 0, -3], 2, 1));
