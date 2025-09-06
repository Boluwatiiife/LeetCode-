// 122. Best Time to Buy and Sell Stock II

const maxProfit = function (prices) {
  let minn = prices[0];
  let ans = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minn) {
      ans += prices[i] - minn;
      minn = prices[i];
    } else {
      minn = Math.min(minn, prices[i]);
    }
  }

  return ans;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
