// 2962. Count Subarrays Where Max Element Appears at Least K Times

const countSubarrays = function (nums, k) {
  let max = Math.max(...nums);
  let left = 0;
  let count = 0;
  let max_count = 0;

  for (let right = 0; right < nums.length; right++) {
    let no = nums[right];
    if (no === max) max_count++;

    while (max_count === k) {
      count += nums.length - right;

      if (nums[left] === max) max_count--;
      left++;
    }
  }
  return count;
};

console.log(countSubarrays([1, 3, 2, 3, 3], 2));
console.log(countSubarrays([1, 4, 2, 1], 3));
