// 1283. Find the Smallest Divisor Given a Threshold

const smallestDivisor = function (nums, threshold) {
  function divisor(arr, x) {
    let sum = 0;
    for (const no of arr) {
      sum += Math.ceil(no / x);
    }
    return sum;
  }
  let no = Math.max(...nums);
  let left = 0;
  let right = no;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (divisor(nums, mid) <= threshold) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
console.log(smallestDivisor([21212, 10101, 12121], 1000000));
