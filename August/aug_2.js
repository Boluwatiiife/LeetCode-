// 3354. Make Array Elements Equal to Zero

const countValidSelections = function (nums) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      const one = nums.slice(0, i).reduce((a, b) => a + b, 0);
      const two = nums.slice(i + 1, n).reduce((a, b) => a + b, 0);
      if (one === two) count += 2;
      if (one + 1 === two || two + 1 === one) count++;
    }
  }

  return count;
};

console.log(countValidSelections([1, 0, 2, 0, 3]));
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0]));
console.log(countValidSelections([16, 13, 10, 0, 0, 0, 10, 6, 7, 8, 7]));
