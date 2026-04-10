// 3866. First Unique Even Element

const firstUniqueEven = function (nums) {
  const n = nums.length;
  const freq = new Map();
  for (const no of nums) freq.set(no, (freq.get(no) || 0) + 1);

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0 && freq.get(nums[i]) === 1) return nums[i];
  }

  return -1;
};

console.log(firstUniqueEven([3, 4, 2, 5, 4, 6]));
console.log(firstUniqueEven([4, 4]));
console.log(firstUniqueEven([3, 2, 2, 4, 5, 4, 6]));
