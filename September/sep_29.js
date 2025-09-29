// 673. Number of Longest Increasing Subsequence

const findNumberOfLIS = function (nums) {
  const n = nums.length;
  let leng = Array(n).fill(1);
  let count = Array(n).fill(1);
  let maxx = 1;
  let ans = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (leng[j] + 1 > leng[i]) {
          leng[i] = leng[j] + 1;
          count[i] = count[j];
        } else if (leng[j] + 1 === leng[i]) {
          count[i] += count[j];
        }
      }
    }
    maxx = Math.max(maxx, leng[i]);
  }

  for (let i = 0; i < n; i++) {
    if (leng[i] === maxx) ans += count[i];
  }

  return ans;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
console.log(findNumberOfLIS([1, 2, 3, 4, 5]));
console.log(findNumberOfLIS([2, 1]));
console.log(findNumberOfLIS([1, 3, 2])); // 2
