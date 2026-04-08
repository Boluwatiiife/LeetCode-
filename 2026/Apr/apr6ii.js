// 3833. Count Dominant Indices

const dominantIndices = function (nums) {
  const n = nums.length;
  let ans = 0;

  let pree = [nums[n - 1]];
  let aveg = [nums[n - 1]];
  let nuu = 1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > aveg[0]) ans++;
    nuu++;
    pree.unshift(nums[i] + pree[0]);
    aveg.unshift(pree[0] / nuu);
  }

  return ans;
};

console.log(dominantIndices([5, 4, 3]));
console.log(dominantIndices([4, 1, 2]));
console.log(dominantIndices([58, 89]));
