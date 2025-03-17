// 2980. Check if Bitwise OR Has Trailing Zeros

const hasTrailingZeros = function (nums) {
  let count = 0;
  for (no of nums) {
    if (no % 2 === 0) {
      count++;
    }
  }
  return count >= 2 ? true : false;
};

console.log(hasTrailingZeros([1, 2, 3, 4, 5]));
console.log(hasTrailingZeros([2, 4, 8, 16]));
console.log(hasTrailingZeros([1, 3, 5, 7, 9]));
