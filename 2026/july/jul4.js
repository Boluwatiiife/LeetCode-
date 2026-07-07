// 3978. Unique Middle Element

const isMiddleElementUnique = function (nums) {
  const n = nums.length;
  let freq = new Map();

  for (const no of nums) freq.set(no, (freq.get(no) || 0) + 1);
  const mid = nums[Math.ceil(n / 2) - 1];

  return freq.get(mid) === 1;
};

console.log(isMiddleElementUnique([1, 2, 3]));
console.log(isMiddleElementUnique([1, 2, 2]));
