// 162. Find Peak Element

const findPeakElement = function (nums) {
  let n = nums.length;
  nums.splice(0, 0, -Infinity);
  nums.push(-Infinity);

  for (let i = 1; i <= n; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      return i - 1;
    }
  }
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([2, 3, 2, 3, 2, 3, 3, 4, 5]));
