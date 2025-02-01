// 3351. Special Array I

const isArraySpecial = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      return false;
    }
  }
  return true;
};

console.log(isArraySpecial([1]));
console.log(isArraySpecial([2, 1, 4]));
console.log(isArraySpecial([4, 3, 1, 6]));
console.log(isArraySpecial([3, 4, 4, 3]));
console.log(isArraySpecial([1, 2]));
console.log(isArraySpecial([1, 1]));
