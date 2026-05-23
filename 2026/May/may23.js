// 2600. K Items With the Maximum Sum

const kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  if (numOnes + numZeros >= k) {
    return numOnes > k ? k : numOnes;
  }
  let rem = k - (numOnes + numZeros);
  return numOnes - rem;
};

console.log(kItemsWithMaximumSum(3, 2, 0, 2));
console.log(kItemsWithMaximumSum(3, 2, 0, 4));
console.log(kItemsWithMaximumSum(6, 6, 6, 13));
