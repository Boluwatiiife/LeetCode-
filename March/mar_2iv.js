// 2144. Minimum Cost of Buying Candies With Discount

const minimumCost = function (cost) {
  let nums = cost.sort((a, b) => b - a);

  for (let i = 2; i < nums.length; i += 3) {
    nums.splice(i, 1);
    i--;
  }

  return nums.reduce((a, b) => a + b);
};

console.log(minimumCost([1, 2, 3]));
console.log(minimumCost([6, 5, 7, 9, 2, 3]));
console.log(minimumCost([5, 5]));
