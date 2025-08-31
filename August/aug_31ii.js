// 45. Jump Game II

const jump = function (nums) {
  const n = nums.length;

  let farr = 0,
    curr = 0,
    ans = 0;

  for (let i = 0; i < n - 1; i++) {
    farr = Math.max(farr, nums[i] + i);

    if (i === curr) {
      ans++;
      curr = farr;
      if (curr >= n - 1) break;
    }
  }

  return ans;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([0]));
console.log(jump([1, 2]));
console.log(jump([3, 2]));
console.log(jump([3, 2, 1]));
console.log(jump([1, 2, 1, 1, 1]));
console.log(jump([2, 0, 2, 0, 1]));
console.log(jump([3, 1, 1, 1, 1]));
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
console.log(jump([5, 4, 0, 1, 3, 6, 8, 0, 9, 4, 9, 1, 8, 7, 4, 8]));
