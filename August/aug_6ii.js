// 3560. Find Minimum Log Transportation Cost

const minCuttingCost = function (n, m, k) {
  let ans = 0;
  if (n > k) {
    ans += k * (n - k);
  }
  if (m > k) {
    ans += k * (m - k);
  }

  return ans;
};

console.log(minCuttingCost(6, 5, 5));
console.log(minCuttingCost(4, 4, 6));
