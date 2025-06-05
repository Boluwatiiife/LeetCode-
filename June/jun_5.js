// 1027. Longest Arithmetic Subsequence

const longestArithSeqLength = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0).map(() => new Map());
  let maxx = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prevLength = dp[j].get(diff) || 1;
      dp[i].set(diff, prevLength + 1);
      maxx = Math.max(maxx, dp[i].get(diff));
    }
  }
  return maxx;
};

console.log(longestArithSeqLength([3, 6, 9, 12]));
console.log(longestArithSeqLength([9, 4, 7, 2, 10]));
console.log(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]));
