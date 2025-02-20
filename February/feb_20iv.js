// 1588. Sum of All Odd Length Subarrays

const sumOddLengthSubarrays = function (arr) {
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let contribution = Math.ceil(((i + 1) * (n - i)) / 2);
    sum += contribution * arr[i];
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
console.log(sumOddLengthSubarrays([1, 2]));
console.log(sumOddLengthSubarrays([10, 11, 12]));
