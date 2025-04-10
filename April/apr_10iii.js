// 219. Contains Duplicate II

const containsNearbyDuplicate = function (nums, k) {
  let n = nums.length;
  let sett = new Set();

  for (let i = 0; i < n; i++) {
    if (sett.has(nums[i])) return true;

    sett.add(nums[i]);

    if (sett.size > k) sett.delete(nums[i - k]);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
