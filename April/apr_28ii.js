// 2461. Maximum Sum of Distinct Subarrays With Length K

const maximumSubarraySum = function (nums, k) {
  let n = nums.length;
  let map = new Map();
  let left = 0;
  let sum = 0;
  let count = 0;
  let max = 0;

  for (let right = 0; right < n; right++) {
    let no = nums[right];
    map.set(no, (map.get(no) || 0) + 1);
    sum += no;
    count++;

    while (map.get(no) > 1) {
      let left_most = nums[left];
      map.set(left_most, map.get(left_most) - 1);
      sum -= nums[left];
      count--;
      left++;
    }

    if (count === k) {
      max = Math.max(max, sum);
      sum -= nums[left];
      map.set(nums[left], map.get(nums[left]) - 1);
      left++;
      count--;
    }
  }
  return max;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
console.log(maximumSubarraySum([4, 4, 4], 3));
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3));
console.log(maximumSubarraySum([9, 18, 10, 13, 17, 9, 19, 2, 1, 18], 5));
