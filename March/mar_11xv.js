// 2652. Sum Multiples

const sumOfMultiples = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfMultiples(7));
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(9));
