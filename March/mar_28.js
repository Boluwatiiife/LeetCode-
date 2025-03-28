// 45. Jump Game II

const jump = function (nums) {
  let count = 0;
  let n = nums.length;
  let farthest = 0;
  let curr_end = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === curr_end) {
      count++;
      curr_end = farthest;

      if (curr_end >= n - 1) break;
    }
  }

  return count;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
