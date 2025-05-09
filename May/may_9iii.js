// 611. Valid Triangle Number

const triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let i = n - 1; i >= 2; i--) {
    let left = 0,
      right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return count;
};

console.log(triangleNumber([2, 2, 3, 4]));
console.log(triangleNumber([4, 2, 3, 4]));
