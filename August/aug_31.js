// 55. Jump Game

const canJump = function (nums) {
  const n = nums.length;
  let ans = Array(n).fill(0);
  ans[0] = nums[0];
  let farr = 0 + nums[0];

  for (let i = 1; i < n; i++) {
    const no = nums[i];
    ans[i] = i + no;
    if (farr < i) return false;
    farr = Math.max(farr, ans[i]);
  }

  return true;
};

// optimized solution

const canJumpp = function (nums) {
  let finalPos = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= finalPos) {
      finalPos = i;
    }
  }

  return finalPos === 0;
};

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([3, 2, 1, 0, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 1, 1, 1, 4]));
// console.log(canJump([4, 3, 1, 0, 2, 0, 2, 4]));
// console.log(canJump([0, 1]));
// console.log(canJump([0, 2, 3]));

console.log(canJumpp([2, 3, 1, 1, 4]));
console.log(canJumpp([3, 2, 1, 0, 4]));
console.log(canJumpp([3, 2, 1, 0, 1, 1, 4]));
console.log(canJumpp([3, 2, 1, 1, 1, 1, 4]));
console.log(canJumpp([4, 3, 1, 0, 2, 0, 2, 4]));
console.log(canJumpp([0, 1]));
console.log(canJumpp([0, 2, 3]));
