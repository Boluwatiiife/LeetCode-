// 3880. Minimum Absolute Difference Between Two Values

const minAbsoluteDifference = function (nums) {
  const n = nums.length;
  let one = [],
    two = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) one.push(i);
    if (nums[i] === 2) two.push(i);
  }

  if (one.length < 1 || two.length < 1) return -1;
  let ans = Infinity;

  for (const oo of one) {
    for (const tt of two) {
      ans = Math.min(ans, Math.abs(oo - tt));
    }
  }

  return ans;
};

console.log(minAbsoluteDifference([1, 0, 0, 2, 0, 1]));
console.log(minAbsoluteDifference([1, 0, 1, 0]));
