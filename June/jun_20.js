// 2826. Sorting Three Groups

const minimumOperations = function (nums) {
  const n = nums.length;
  let dp = [];

  for (let i = 0; i < n; i++) {
    let no = nums[i];
    let left = 0;
    let right = dp.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] <= no) left = mid + 1;
      else right = mid - 1;
    }
    if (left < dp.length) {
      dp[left] = no;
    } else {
      dp.push(no);
    }
  }
  return n - dp.length;
};

console.log(minimumOperations([2, 1, 3, 2, 1]));
console.log(minimumOperations([1, 3, 2, 1, 3, 3]));
console.log(minimumOperations([2, 2, 2, 2, 3, 3]));
console.log(minimumOperations([3, 1, 2]));
console.log(minimumOperations([3, 2, 2, 1, 2]));
console.log(minimumOperations([1, 3, 1, 2]));
