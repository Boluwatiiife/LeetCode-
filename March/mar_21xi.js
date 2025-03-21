// 3314. Construct the Minimum Bitwise Array I

const minBitwiseArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    for (let j = 1; j <= temp; j++) {
      if ((j | (j + 1)) === temp) {
        nums[i] = j;
        break;
      }
    }
    if (temp === nums[i]) {
      nums[i] = -1;
    }
  }
  return nums;
};

console.log(minBitwiseArray([2, 3, 5, 7]));
console.log(minBitwiseArray([11, 13, 31]));
