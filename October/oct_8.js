// 714. Best Time to Buy and Sell Stock with Transaction Fee

const maxProfit = function (prices, fee) {
  let hold = 0 - prices[0],
    not_hold = 0,
    profit = 0;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, not_hold - prices[i]);
    not_hold = Math.max(not_hold, hold + prices[i] - fee);
    profit = Math.max(hold, not_hold);
  }

  return profit;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
