// 2348. Number of Zero-Filled Subarrays

const zeroFilledSubarray = function (nums) {
  let ans = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      curr++;
      ans += curr;
    } else {
      curr = 0;
    }
  }

  return ans;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));
console.log(zeroFilledSubarray([2, 10, 2019]));
