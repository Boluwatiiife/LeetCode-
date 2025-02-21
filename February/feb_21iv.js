// 1672. Richest Customer Wealth

const maximumWealth = function (accounts) {
  for (let i = 0; i < accounts.length; i++) {
    let arr = accounts[i];
    accounts[i] = arr.reduce((a, b) => a + b);
  }
  return Math.max(...accounts);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
