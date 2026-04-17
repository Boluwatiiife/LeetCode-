// 3637. Trionic Array I

const isTrionic = function (nums) {
  const n = nums.length;
  let arr = [];

  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      arr.push(nums.splice(0, i));
      break;
    }
  }
  if (arr.length > 0) nums.unshift(arr[0][arr[0].length - 1]);

  for (let i = 1; i < n; i++) {
    if (nums[i] >= nums[i - 1]) {
      arr.push(nums.splice(0, i));
      break;
    }
  }
  if (arr.length > 1) nums.unshift(arr[1][arr[1].length - 1]);

  for (let i = 1; i < n; i++) {
    if (i === nums.length - 1) {
      arr.push(nums);
    }
    if (nums[i] <= nums[i - 1]) {
      return false;
    }
  }

  for (temp of arr) {
    if (temp.length < 2) return false;
  }
  return true;
};
console.log(isTrionic([1, 3, 5, 4, 2, 6]));
console.log(isTrionic([2, 1, 3]));
console.log(isTrionic([3, 5, 1, 5, 1]));
console.log(isTrionic([8, 1, 2, 4]));
console.log(isTrionic([1, 2, 3]));
