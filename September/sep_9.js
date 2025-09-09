// 2327. Number of People Aware of a Secret

const peopleAwareOfSecret = function (n, delay, forget) {
  const mod = 1e9 + 7;
  let grid = Array(n).fill(0);
  grid[0] = 1;
  let share = 0;

  for (let i = 1; i < n; i++) {
    if (i - delay >= 0) share = (share + grid[i - delay]) % mod;
    if (i - forget >= 0) share = (share - grid[i - forget] + mod) % mod;
    grid[i] = share;
  }

  let ans = 0;
  for (let i = n - forget; i < n; i++) {
    if (i >= 0) ans = (ans + grid[i]) % mod;
  }

  return ans;
};

console.log(peopleAwareOfSecret(6, 2, 4));
console.log(peopleAwareOfSecret(4, 1, 3));
