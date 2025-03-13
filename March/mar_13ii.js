// 2706. Buy Two Chocolates

const buyChoco = function (prices, money) {
  prices = prices.sort((a, b) => a - b);
  return prices[0] + prices[1] <= money
    ? money - (prices[0] + prices[1])
    : money;
};

console.log(buyChoco([1, 2, 2], 3));
console.log(buyChoco([3, 2, 2], 3));
