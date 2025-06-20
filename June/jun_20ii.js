// 2830. Maximize the Profit as the Salesman

const maximizeTheProfit = function (n, offers) {
  offers.sort((a, b) => a[1] - b[1]);
  const len = offers.length;
  let dp = new Array(len).fill(0);
  const ends = offers.map((xx) => xx[1]);

  for (let i = 0; i < len; i++) {
    const [start, end, gold] = offers[i];

    let left = 0;
    let right = i - 1;
    let dex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      let temp = offers[mid];
      if (temp[1] < start) {
        dex = mid;
        left = mid + 1;
      } else right = mid - 1;
    }

    const take = gold + (dex >= 0 ? dp[dex] : 0);
    const skip = i > 0 ? dp[i - 1] : 0;

    dp[i] = Math.max(skip, take);
  }

  return dp[len - 1];
};

console.log(
  maximizeTheProfit(5, [
    [0, 0, 1],
    [0, 2, 2],
    [1, 3, 2],
  ])
);
console.log(
  maximizeTheProfit(5, [
    [0, 0, 1],
    [0, 2, 10],
    [1, 3, 2],
  ])
);
