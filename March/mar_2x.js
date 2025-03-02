// 2169. Count Operations to Obtain Zero

const countOperations = function (num1, num2) {
  let count = 0;
  let one = num1;
  let two = num2;
  let xxx = true;
  while (xxx) {
    if (one === 0 || two === 0) return count;
    if (one >= two) {
      one = one - two;
      count++;
    } else if (two >= one) {
      two = two - one;
      count++;
    }
  }
};

console.log(countOperations(2, 3));
console.log(countOperations(10, 10));
