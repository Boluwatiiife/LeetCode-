// 309. Best Time to Buy and Sell Stock with Cooldown

const maxProfit = function (prices) {
  const n = prices.length;

  let hold = -prices[0],
    free = 0,
    cool = -Infinity;

  for (let i = 1; i < n; i++) {
    let prev_hold = hold,
      prev_free = free,
      prev_cool = cool;

    hold = Math.max(prev_hold, prev_free - prices[i]);
    free = Math.max(prev_free, prev_cool);
    cool = prev_hold + prices[i];
  }

  return Math.max(free, cool);
};

console.log(maxProfit([1, 2, 3, 0, 2])); // 3
console.log(maxProfit([1])); // 0
