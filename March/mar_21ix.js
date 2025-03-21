// 3300. Minimum Element After Replacement With Digit Sum

const minElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i].toString();
    let sum = 0;
    for (char of temp) {
      sum += Number(char);
    }
    nums[i] = sum;
  }
  return Math.min(...nums);
};

console.log(minElement([10, 12, 13, 14]));
console.log(minElement([1, 2, 3, 4]));
console.log(minElement([999, 19, 199]));
