// 697. Degree of an Array

const findShortestSubArray = function (nums) {
  let freq = new Map();
  let maxx = 0;
  for (const no of nums) {
    freq.set(no, (freq.get(no) || 0) + 1);
    maxx = Math.max(maxx, freq.get(no));
  }
  let ans = Infinity;
  for (const no of nums) {
    if (freq.get(no) === maxx) {
      ans = Math.min(ans, nums.lastIndexOf(no) - nums.indexOf(no) + 1);
    }
  }

  return ans;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
