// 213. House Robber II

const rob = function (nums) {
  if (nums.length < 2) return nums[0];

  const n = nums.length;
  const one = nums.slice(0, n - 1);
  const two = nums.slice(1, n);

  function robb(nums) {
    if (nums.length < 2) return nums[0];

    let prev_1 = 0,
      prev_2 = 0;

    for (const no of nums) {
      let temp = Math.max(prev_1, prev_2 + no);
      prev_2 = prev_1;
      prev_1 = temp;
    }

    return prev_1;
  }

  return Math.max(robb(one), robb(two));
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));
console.log(rob([0]));
console.log(rob([3,4,6,1,1]));
