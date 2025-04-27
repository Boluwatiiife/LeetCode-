// 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum

const minSumOfLengths = function (arr, target) {
  const dp = [];
  let i = 0,
    j = 0,
    sum = 0;
  let min_len = Infinity;
  let output = Infinity;

  while (j < arr.length) {
    sum += arr[j];

    while (sum > target) {
      sum -= arr[i];
      i++;
    }
    if (sum === target) {
      const len = j - i + 1;
      min_len = Math.min(len, min_len);
      if (i > 0) output = Math.min(output, dp[i - 1] + len);
    }
    dp[j] = min_len;
    j++;
  }
  return output === Infinity ? -1 : output;
};

console.log(minSumOfLengths([3, 2, 2, 4, 3], 3));
console.log(minSumOfLengths([7, 3, 4, 7], 7));
console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6));
console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 2, 2, 1, 1], 6));
