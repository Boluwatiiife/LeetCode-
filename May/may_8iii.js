// 532. K-diff Pairs in an Array

const findPairs = function (nums, k) {
  if (k < 0) return 0;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let l = 0,
    r = 1;
  let count = 0;
  let set = new Set();

  while (r < n) {
    if (l === r || nums[r] - nums[l] < k) r++;
    else if (nums[r] - nums[l] > k) l++;
    else {
      if (!set.has(nums[l])) {
        count++;
        set.add(nums[l]);
      }
      l++;
      r++;
    }
  }
  return count;
};

console.log(findPairs([3, 1, 4, 1, 5], 2));
console.log(findPairs([1, 2, 3, 4, 5], 1));
console.log(findPairs([1, 3, 1, 5, 4], 0));
