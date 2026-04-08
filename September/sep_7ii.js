// 198. House Robber

const rob = function (nums) {
  if (nums.length < 2) return nums[0];

  let prev_1 = 0,
    prev_2 = 0;

  for (const no of nums) {
    let temp = Math.max(prev_1, prev_2 + no);
    prev_2 = prev_1;
    prev_1 = temp;
  }

  return prev_1;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3, 4, 6, 12, 6, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([1, 3, 1, 3, 100])); // 103
console.log(rob([0]));
console.log(rob([0, 0]));
console.log(rob([1, 2, 3, 1])); // 4
