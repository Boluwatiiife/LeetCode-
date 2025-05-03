// 3255. Find the Power of K-Size Subarrays II

const resultsArray = function (nums, k) {
  const n = nums.length;
  let ans = [];
  let count = 1;

  for (let i = 0; i < k - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) count++;
    else count = 1;
  }

  ans.push(count === k ? nums[k - 1] : -1);

  for (let i = k; i < n; i++) {
    if (count === k) count--;
    if (nums[i - 1] + 1 === nums[i]) count++;
    else count = 1;

    ans.push(count === k ? nums[i] : -1);
  }
  return ans;
};

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
console.log(resultsArray([2, 2, 2, 2, 2], 4));
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2));
console.log(resultsArray([1, 3, 4], 2));
