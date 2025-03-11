// 2600. K Items With the Maximum Sum

const kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numOnes; i++) {
    if (count === k) return sum;
    count++;
    sum++;
  }
  for (let i = 0; i < numZeros; i++) {
    if (count === k) return sum;
    count++;
    sum += 0;
  }
  for (let i = 0; i < numNegOnes; i++) {
    if (count === k) return sum;
    count++;
    sum = sum + -1;
  }
  return sum;
};

console.log(kItemsWithMaximumSum(3, 2, 0, 2));
console.log(kItemsWithMaximumSum(3, 2, 0, 4));
console.log(kItemsWithMaximumSum(3, 3, 5, 11));
