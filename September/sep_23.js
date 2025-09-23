// 3684. Maximize Sum of At Most K Distinct Elements

const maxKDistinct = function (nums, k) {
  const arr = [...new Set(nums)];
  arr.sort((a, b) => b - a);

  return arr.slice(0, k);
};

console.log(maxKDistinct([84, 93, 100, 77, 90], 3));
console.log(maxKDistinct([84, 93, 100, 77, 93], 3));
console.log(maxKDistinct([1, 1, 1, 2, 2, 2], 6));
