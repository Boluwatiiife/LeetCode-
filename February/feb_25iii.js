// 1909. Remove One Element to Make the Array Strictly Increasing

const canBeIncreasing = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    nums.splice(i, 1);
    // return nums;
    let bool = nums.every(
      (value, index) => index === 0 || nums[index - 1] < value
    );
    if (bool === true) {
      return true;
    }
    nums.splice(i, 0, temp);
  }
  return false;
};

console.log(canBeIncreasing([1, 2, 10, 5, 7]));
console.log(canBeIncreasing([2, 3, 1, 2]));
console.log(canBeIncreasing([1, 1, 1]));
console.log(canBeIncreasing([1, 2, 3, 2, 5, 7, 8]));
