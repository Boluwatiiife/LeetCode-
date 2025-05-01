// 2841. Maximum Sum of Almost Unique Subarray

const maxSum = function (nums, m, k) {
  const n = nums.length;
  let left = 0;
  let map = new Map();
  let count = 0;
  let sum = 0;
  let max = 0;

  for (let right = 0; right < n; right++) {
    const no = nums[right];
    count++;
    sum += no;
    map.set(no, (map.get(no) || 0) + 1);

    while (count === k) {
      if (map.size >= m) max = Math.max(max, sum);
      let left_most = nums[left];
      sum -= left_most;
      map.set(left_most, map.get(left_most) - 1);
      if (map.get(left_most) === 0) map.delete(left_most);
      count--;
      left++;
    }
  }
  return max;
};

console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4));
console.log(maxSum([5, 9, 9, 2, 4, 5, 4], 1, 3));
console.log(maxSum([1, 2, 1, 2, 1, 2, 1], 3, 3));
console.log(maxSum([1, 1, 1, 3], 2, 2));
console.log(maxSum([1, 2, 2], 2, 2));
