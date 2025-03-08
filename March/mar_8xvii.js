// 2475. Number of Unequal Triplets in Array

const unequalTriplets = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i < j && j < k) {
          if (
            nums[i] !== nums[j] &&
            nums[j] !== nums[k] &&
            nums[i] !== nums[k]
          ) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

console.log(unequalTriplets([4, 4, 2, 4, 3]));
console.log(unequalTriplets([1, 1, 1, 1, 1]));
