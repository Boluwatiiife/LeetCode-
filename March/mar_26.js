// 31. Next Permutation

const nextPermutation = function (nums) {
  //   return nums;
  const swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);
  let len = nums.length - 1,
    i,
    j;
  for (i = len - 1; nums[i] >= nums[i + 1]; ) i--;
  for (let k = i + 1; len > k; k++, len--) swap(k, len);
  if (~i) {
    for (j = i + 1; nums[i] >= nums[j]; ) j++;
    swap(i, j);
  }
  return nums;
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1, 5]));
console.log(nextPermutation([1, 2, 3, 4]));
