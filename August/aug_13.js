// 3413. Maximum Coins From K Consecutive Bags

const maximumCoins = function (coins, k) {
  const n = coins.length;

  let arr = [];
  for (const [one, two, no] of coins) {
    arr.push([two - one + 1, no]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  return arr;
};

console.log(
  maximumCoins(
    [
      [8, 10, 1],
      [1, 3, 2],
      [5, 6, 4],
    ],
    4
  )
);
console.log(maximumCoins([[1, 10, 3]], 2));
console.log(maximumCoins([[30, 49, 12]], 28));
console.log(maximumCoins([[1, 1000000000, 1000]], 1000000000));
