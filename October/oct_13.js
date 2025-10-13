// 935. Knight Dialer

const knightDialer = function (n) {
  const MOD = 1e9 + 7;
  const grid = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4],
  ];
  let dp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  for (let j = 1; j < n; j++) {
    let temp = Array(10).fill(0);
    for (let i = 0; i < 10; i++) {
      const digit = grid[i];
      for (const dig of digit) {
        temp[i] = (temp[i] + dp[dig]) % MOD;
      }
    }
    dp = temp;
  }

  return dp.reduce((a, b) => (a + b) % MOD);
};

console.log(knightDialer(1));
console.log(knightDialer(2));
console.log(knightDialer(3131));
console.log(knightDialer(3));
