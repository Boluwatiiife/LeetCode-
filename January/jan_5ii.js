//  1475. Final Prices With a Special Discount in a Shop

/*

You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

*/

const finalPrices = function (prices) {
  for (let x = 0; x < prices.length; x++) {
    for (let y = 0; y < prices.length; y++) {
      if (y > x && prices[y] <= prices[x]) {
        prices[x] = prices[x] - prices[y];
        break;
      }
    }
  }
  return prices;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
