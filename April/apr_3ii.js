// 198. House Robber

const rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev1 = 0,
    prev2 = 0;

  for (no of nums) {
    let temp = Math.max(prev1, prev2 + no);
    prev2 = prev1;
    prev1 = temp;
  }

  return prev1;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
