// 2407. Longest Increasing Subsequence II

const lengthOfLIS = function (nums, k) {
  const n = nums.length;
  let ans = Array(n).fill(1);
  let temp = [];
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
  // return ans;

  for (let i = ans.length - 1; i >= 0; i--) {
    const curr = ans[i];
    if (curr === result) {
      temp.unshift(nums[i]);
      result--;
    }
  }

  let maxx = 1;
  let count = 1;

  for (let i = 1; i < temp.length; i++) {
    if (temp[i] - temp[i - 1] <= k) {
      count++;
    } else {
      maxx = Math.max(maxx, count);
      count = 1;
    }
  }
  maxx = Math.max(maxx, count);

  return maxx;
};

console.log(lengthOfLIS([4, 2, 1, 4, 3, 4, 5, 8, 15], 3));
console.log(lengthOfLIS([7, 4, 5, 1, 8, 12, 4, 7], 5));
console.log(lengthOfLIS([1, 5], 1));
console.log(lengthOfLIS([1, 4, 7, 15, 5], 1));
