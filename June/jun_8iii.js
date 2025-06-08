// 1802. Maximum Value at a Given Index in a Bounded Array

const maxValue = function (n, index, maxSum) {
  function getSum(x, length) {
    if (x > length) {
      const decreasingSum = ((x - 1 + x - length) * length) / 2;
      return decreasingSum;
    } else {
      const decreasingSum = ((x - 1 + 1) * (x - 1)) / 2;
      const ones = length - (x - 1);
      return decreasingSum + ones;
    }
  }

  function canBuild(x) {
    const leftLen = index;
    const rightLen = n - index - 1;

    const leftSum = getSum(x, leftLen);
    const rightSum = getSum(x, rightLen);

    const total = leftSum + rightSum + x;
    return total <= maxSum;
  }

  let low = 1;
  let high = maxSum;
  let min = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canBuild(mid)) {
      min = Math.max(min, mid);
      low = mid + 1;
    } else high = mid - 1;
  }
  return min;
};

console.log(maxValue(4, 2, 6));
console.log(maxValue(6, 1, 10));
console.log(maxValue(5711832, 1244491, 274282050));
