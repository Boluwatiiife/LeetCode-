// 2078. Two Furthest Houses With Different Colors

const maxDistance = function (colors) {
  const n = colors.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (colors[i] !== colors[0]) ans = Math.max(ans, Math.abs(i - 0));
  }
  for (let i = n - 2; i >= 0; i--) {
    if (colors[i] !== colors[n - 1]) ans = Math.max(ans, Math.abs(i - n + 1));
  }

  return ans;
};

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([0, 1]));
console.log(maxDistance([6, 6, 6, 6, 6, 6, 6, 6, 6, 19, 19, 6, 6]));
console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4]));
