// 2413. Smallest Even Multiple

const smallestEvenMultiple = function (n) {
  for (let i = n; i <= Infinity; i++) {
    if (i % 2 === 0 && i % n === 0) {
      return i;
    }
  }
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));
console.log(smallestEvenMultiple(77));
