// 2554. Maximum Number of Integers to Choose From a Range I

const maxCount = function (banned, n, maxSum) {
  let sett = new Set();
  for (let no of banned) {
    if (no <= n) sett.add(no);
  }
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (!sett.has(i)) {
      sum += i;
      count++;
    }
    if (sum > maxSum) {
      count--;
      break;
    }
  }
  return count;
};

console.log(maxCount([1, 6, 5], 5, 6));
console.log(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1));
console.log(maxCount([11], 7, 50));
