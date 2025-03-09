// 2475. Number of Unequal Triplets in Array

const numberOfCuts = function (n) {
  if (n === 1) return 0;
  if (n % 2 === 0) return n / 2;
  return n;
};

console.log(numberOfCuts(4));
console.log(numberOfCuts(3));
