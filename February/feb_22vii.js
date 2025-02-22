// 1748. Sum of Unique Elements

const sumOfUnique = function (nums) {
  let count = new Map();

  for (digit of nums) {
    count.set(digit, (count.get(digit) || 0) + 1);
  }
  let arr = [...count];
  let sum = 0;
  for ([key, value] of arr) {
    if (value === 1) {
      sum += key;
    }
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
console.log(sumOfUnique([1, 2, 3, 4, 5, 5]));
