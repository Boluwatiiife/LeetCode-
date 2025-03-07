// 2099. Find Subsequence of Length K With the Largest Sum

const maxSubsequence = function (nums, k) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push([nums[i], i]);
  }

  arr = arr.sort((a, b) => b[0] - a[0]);
  let resultt = [];
  for (let i = 0; i < k; i++) {
    resultt.push(arr[i]);
  }
  resultt = resultt.sort((a, b) => a[1] - b[1]);

  let anss = [];
  for ([val, index] of resultt) {
    anss.push(val);
  }
  return anss;
};

console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence([-1, -2, 3, 4], 3));
console.log(maxSubsequence([3, 4, 3, 3], 2));
console.log(maxSubsequence([50, -75], 2));
