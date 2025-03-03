// 2210. Count Hills and Valleys in an Array

const countHillValley = function (nums) {
  let arr = nums;
  for (let i = 1; i < arr.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  let count = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (
      (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
      (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
    ) {
      count++;
    }
  }

  return count;
};

console.log(countHillValley([2, 4, 1, 1, 6, 5]));
console.log(countHillValley([6, 6, 5, 5, 4, 1]));
console.log(countHillValley([5, 7, 7, 1, 7]));
