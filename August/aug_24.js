// 322. Coin Change

const coinChange = function (coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    let no = i;
    for (const temp of coins) {
      if (temp <= no) {
        arr[i] = Math.min(arr[no - temp] + 1, arr[i]);
      }
    }
  }

  return arr[amount] === Infinity ? -1 : arr[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
