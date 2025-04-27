// 1695. Maximum Erasure Value

const maximumUniqueSubarray = function (nums) {
  let n = nums.length;
  let maxx = 0;
  let left = 0;
  let map = new Map();
  let sum = 0;

  for (let right = 0; right < n; right++) {
    const no = nums[right];
    sum += no;
    map.set(no, (map.get(no) || 0) + 1);
    while (map.get(no) > 1) {
      let left_most = nums[left];
      sum -= left_most;
      map.set(left_most, map.get(left_most) - 1);
      left++;
    }
    maxx = Math.max(maxx, sum);
  }
  return maxx;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
