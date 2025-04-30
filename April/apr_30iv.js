// 2762. Continuous Subarrays

const continuousSubarrays = function (nums) {
  const n = nums.length;
  let l = 0,
    r = 0;
  let min = nums[0],
    max = nums[0];
  let count = 0;

  while (r < n) {
    min = Math.min(min, nums[r]);
    max = Math.max(max, nums[r]);

    if (max - min >= 0 && max - min <= 2) {
      count += r - l + 1;
      r++;
    } else {
      if (nums[l] === min) min = Infinity;
      if (nums[l] === max) max = -Infinity;
      l++;

      for (let i = l; i <= r; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
      }
    }
  }
  return count;
};

console.log(continuousSubarrays([5, 4, 2, 4]));
console.log(continuousSubarrays([1, 2, 3]));
