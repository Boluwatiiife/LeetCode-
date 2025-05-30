// 3186. Maximum Total Damage With Spell Casting

const maximumTotalDamage = function (power) {
  const n = power.length;
  power.sort((a, b) => a - b);
  const f = Array(n).fill(0);
  const cnt = {};
  const nxt = Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    cnt[power[i]] = (cnt[power[i]] || 0) + 1;
    let [l, r] = [i + 1, n];
    while (l < r) {
      const mid = (l + r) >> 1;
      if (power[mid] > power[i] + 2) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    nxt[i] = l;
  }
  const dfs = (i) => {
    if (i >= n) {
      return 0;
    }
    if (f[i]) {
      return f[i];
    }
    const a = dfs(i + cnt[power[i]]);
    const b = power[i] * cnt[power[i]] + dfs(nxt[i]);
    return (f[i] = Math.max(a, b));
  };
  return dfs(0);
};

console.log(maximumTotalDamage([1, 1, 3, 4]));
console.log(maximumTotalDamage([7, 1, 6, 6]));
console.log(maximumTotalDamage([5, 9, 2, 10, 2, 7, 10, 9, 3, 8]));
