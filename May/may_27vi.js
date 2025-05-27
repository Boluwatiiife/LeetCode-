// 2856. Minimum Array Length After Pair Removals

const minLengthAfterRemovals = function (nums) {
  const n = nums.length;
  const mid = Math.floor(n / 2);
  let i = 0,
    j = mid;
  let count = 0;

  while (i < mid && j < n) {
    if (nums[i] < nums[j]) {
      count += 2;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return n - count;
};

console.log(minLengthAfterRemovals([1, 2, 3, 4]));
console.log(minLengthAfterRemovals([1, 1, 2, 2, 3, 3]));
console.log(minLengthAfterRemovals([1000000000, 1000000000]));
console.log(minLengthAfterRemovals([2, 3, 4, 4, 4]));
