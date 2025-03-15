// 2855. Minimum Right Shifts to Sort the Array

const minimumRightShifts = function (nums) {
  let arr = [];
  for (no of nums) {
    arr.push(no);
  }
  arr = arr.sort((a, b) => a - b);
  if (
    nums.length === arr.length &&
    nums.every((val, index) => val === arr[index])
  )
    return 0;
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let temp = nums[n - 1];
    nums.pop();
    nums.splice(0, 0, temp);
    count++;
    if (
      nums.length === arr.length &&
      nums.every((val, index) => val === arr[index])
    ) {
      return count;
    }
  }
  return -1;
};

console.log(minimumRightShifts([3, 4, 5, 1, 2]));
console.log(minimumRightShifts([1, 3, 5]));
console.log(minimumRightShifts([2, 1, 4]));
