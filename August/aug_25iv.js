// 300. Longest Increasing Subsequence

const lengthOfLIS = function (nums) {
  const n = nums.length;
  let ans = Array(n).fill(1);

  let result = 1;

  for (let dex = 1; dex < n; dex++) {
    const curr = nums[dex];
    for (let i = 0; i < dex; i++) {
      if (nums[i] < curr) {
        ans[dex] = Math.max(ans[i] + 1, ans[dex]);
        result = Math.max(result, ans[dex]);
      }
    }
  }

  return result;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS([-1, 3, 4, 5, 2, 2, 2, 2]));
