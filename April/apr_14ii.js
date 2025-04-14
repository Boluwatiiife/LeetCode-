// 1534. Count Good Triplets

const countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i < j && j < k) {
          if (
            Math.abs(arr[i] - arr[j]) <= a &&
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));
