// 3488. Closest Equal Element Queries

const solveQueries = function (nums, queries) {
  function circular(a, b, n) {
    return Math.min(Math.abs(a - b), n - Math.abs(a - b));
  }
  const m = nums.length;
  const maxx = Math.max(...nums);
  let unique = new Array(maxx + 1).fill(null).map(() => []);

  for (let i = 0; i < m; i++) {
    unique[nums[i]].push(i);
  }

  let ans = new Array(queries.length).fill(Infinity);

  for (let i = 0; i < queries.length; i++) {
    const dex = queries[i];
    const temp = unique[nums[dex]];
    let len = temp.length;

    if (len === 1) continue;
    let left = 0,
      right = len - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (temp[mid] < dex) left = mid + 1;
      else right = mid - 1;
    }
    let beff = left === 0 ? len - 1 : left - 1;
    let afff = left === len - 1 ? 0 : left + 1;

    ans[i] = Math.min(
      ans[i],
      circular(dex, temp[beff], m),
      circular(dex, temp[afff], m)
    );
  }
  finalAns = ans.map((elem) => (elem === Infinity ? -1 : elem));

  return finalAns;
};

console.log(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5]));
console.log(solveQueries([1, 2, 3, 4], [0, 1, 2, 3]));
console.log(solveQueries([1, 2, 2, 3, 4], [0, 1, 2, 3]));
console.log(solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]));
