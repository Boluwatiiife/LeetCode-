// 594. Longest Harmonious Subsequence.

const findLHS = function (nums) {
  let uniquee = new Set(nums);
  let temp = [...uniquee];
  temp = temp.sort((a, b) => a - b);
  let count = new Map();
  for (digit of nums) {
    count.set(digit, (count.get(digit) || 0) + 1);
  }

  let resultt = [];
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] - temp[i - 1] === 1) {
      resultt.push(count.get(temp[i]) + count.get(temp[i - 1]));
    }
  }
  if (resultt.length < 1) return 0;
  return Math.max(...resultt);
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([2, 1, 4, 5, 1, 6, 5, 2, 6]));
