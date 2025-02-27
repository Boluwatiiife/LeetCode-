// 2006. Count Number of Pairs With Absolute Difference K

const countKDifference = function (nums, k) {
  let count = 0;

  for (first of nums) {
    for (second of nums) {
      if (Math.abs(first - second) === k) {
        count++;
      }
    }
  }
  return count / 2;
};

console.log(countKDifference([1, 2, 2, 1], 1));
console.log(countKDifference([1, 3], 3));
console.log(countKDifference([3, 2, 1, 5, 4], 2));
