// 3502. Minimum Cost to Reach Every Position

const minCosts = function (cost) {
  let ans = [];
  let minn = Infinity;

  for (const no of cost) {
    minn = Math.min(minn, no);
    ans.push(minn);
  }

  return ans;
};

console.log(minCosts([5, 3, 4, 1, 3, 2]));
console.log(minCosts([1, 2, 4, 6, 7]));
