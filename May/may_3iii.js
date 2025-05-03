// 3254. Find the Power of K-Size Subarrays I

const resultsArray = function (nums, k) {
  const n = nums.length;
  let arr = [];
  let ans = [];

  function check_ass(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] - 1 !== array[i - 1]) return false;
    }
    return true;
  }

  for (let i = 0; i < k; i++) arr.push(nums[i]);
  if (check_ass(arr) === true) ans.push(Math.max(...arr));
  else ans.push(-1);

  for (let i = k; i < n; i++) {
    arr.shift();
    arr.push(nums[i]);
    if (check_ass(arr)) ans.push(Math.max(...arr));
    else ans.push(-1);
  }
  return ans;
};

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
console.log(resultsArray([2, 2, 2, 2, 2], 4));
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2));
