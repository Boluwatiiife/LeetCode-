// Range sum Query

const rangeSum = function (arr, x, y) {
  const n = arr.length;
  let sum = [0];

  for (let i = 0; i < arr.length; i++) {
    sum.push(arr[i] + sum[sum.length - 1]);
  }

  return sum[y] - sum[x - 1];
};

console.log(rangeSum([1, 2, 3], 1, 3)); // 6
console.log(rangeSum([1, 2, 3], 2, 3)); // 5
console.log(rangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 7)); // 22
console.log(rangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 5)); // 15
