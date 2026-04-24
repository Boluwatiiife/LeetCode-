// 3903. Smallest Stable Index I

const firstStableIndex = function (nums, k) {
  const n = nums.length;
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    let maxx = 0,
      minn = Infinity;
    for (let j = 0; j <= i; j++) maxx = Math.max(maxx, nums[j]);
    for (let j = i; j < n; j++) minn = Math.min(minn, nums[j]);
    if (maxx - minn <= k) ans = Math.min(ans, i);
  }

  return ans !== Infinity ? ans : -1;
};

console.log(firstStableIndex([5, 0, 1, 4], 3));
console.log(firstStableIndex([3, 2, 1], 1));
console.log(firstStableIndex([0], 0));
