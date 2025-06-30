// 121. Best Time to Buy and Sell Stock

const maxProfit = function (prices) {
  let ans = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    ans = Math.max(ans, prices[i] - min);
  }
  return ans;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
