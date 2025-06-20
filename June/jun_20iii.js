// 2861. Maximum Number of Alloys

const maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
  function canMake(mid) {
    for (let i = 0; i < k; i++) {
      let totalCost = 0;
      for (let metal = 0; metal < n; metal++) {
        let required = composition[i][metal] * mid;
        let buy = Math.max(0, required - stock[metal]);
        totalCost += buy * cost[metal];
      }
      if (totalCost <= budget) return true;
    }
    return false;
  }

  let left = 0;
  let right = 1e9;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canMake(mid)) left = mid + 1;
    else right = mid - 1;
  }
  return right;
};

console.log(
  maxNumberOfAlloys(
    3,
    2,
    15,
    [
      [1, 1, 1],
      [1, 1, 10],
    ],
    [0, 0, 0],
    [1, 2, 3]
  )
);
console.log(
  maxNumberOfAlloys(
    3,
    2,
    15,
    [
      [1, 1, 1],
      [1, 1, 10],
    ],
    [0, 0, 100],
    [1, 2, 3]
  )
);
console.log(
  maxNumberOfAlloys(
    2,
    3,
    10,
    [
      [2, 1],
      [1, 2],
      [1, 1],
    ],
    [1, 1],
    [5, 5]
  )
);
