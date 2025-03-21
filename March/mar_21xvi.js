// 3349. Adjacent Increasing Subarrays Detection I

const hasIncreasingSubarrays = function (nums, k) {
  let arr = [];
  let indexx = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let temp = [];
    for (let j = i; j < k + i; j++) {
      temp.push(nums[j]);
    }
    const is_strictly = function (arrr) {
      for (let i = 1; i < arrr.length; i++) {
        if (arrr[i] <= arrr[i - 1]) {
          return false;
        }
      }
      return true;
    };
    if (is_strictly(temp)) {
      arr.push(temp);
      indexx.push(i);
    }
  }
  let sum = 0;
  for (let i = 0; i < indexx.length; i++) {
    for (let j = 0; j < indexx.length; j++) {
      if (indexx[i] - indexx[j] === k) {
        sum++;
      }
    }
  }
  return sum > 0 ? true : false;
};

console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3));
console.log(hasIncreasingSubarrays([2, 1, 2, 3, 4, 5, 6], 3));
console.log(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5));
console.log(hasIncreasingSubarrays([-15, 19], 1));
console.log(hasIncreasingSubarrays([-15, 3, 16, 0], 2));
console.log(hasIncreasingSubarrays([6, 13, -17, -20, 2], 2));
