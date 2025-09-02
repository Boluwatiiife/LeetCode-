// 239. Sliding Window Maximum

const maxSlidingWindow = function (nums, k) {
  const n = nums.length;
  let ans = [];

  let temp = [];

  for (let i = 0; i < n; i++) {
    temp.push(nums[i]);
    if (temp.length === k) {
      ans.push(Math.max(...temp));
      temp.shift();
    }
  }

  return ans;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, 2, 3], 2));
