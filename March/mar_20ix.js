// 3194. Minimum Average of Smallest and Largest Elements

const minimumAverage = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let minn = Infinity;
  let n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = (nums[i] + nums[n - i - 1]) / 2;
    minn = Math.min(minn, temp);
  }
  return minn;
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
console.log(minimumAverage([1, 9, 8, 3, 10, 5]));
console.log(minimumAverage([1, 2, 3, 7, 8, 9]));
