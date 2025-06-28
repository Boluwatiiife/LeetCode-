// 3488. Closest Equal Element Queries

const solveQueries = function (nums, queries) {
  const m = nums.length;
  let max = Math.max(...nums);
  let unique = new Array(max + 1).fill(null).map(() => []);

  for (let i = 0; i < nums.length; i++) {
    unique[nums[i]].push(i);
  }
  const n = queries.length;
  let ans = new Array(n).fill(Infinity);

  for (let j = 0; j < n; j++) {
    let dex = queries[j];
    let temp = unique[nums[dex]];

    const len = temp.length;
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

    let use = Math.min(Math.abs(temp[beff] - dex), Math.abs(temp[afff] - dex));
    let circle = Math.min(m - dex + temp[beff], m - dex + temp[afff]);
    let circle2 = Math.min(m - temp[beff] + dex, m - temp[afff] + dex);

    ans[j] = Math.min(ans[j], use, circle, circle2);
  }
  const result = ans.map((xx) => (xx === Infinity ? -1 : xx));

  return result;
};

console.log(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5]));
console.log(solveQueries([1, 2, 3, 4], [0, 1, 2, 3]));
console.log(solveQueries([1, 2, 2, 3, 4], [0, 1, 2, 3]));
console.log(solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]));
console.log(solveQueries([6, 12, 17, 9, 16, 7, 6], [5, 6, 0, 4]));
console.log(solveQueries([6, 12, 3, 9, 4, 16, 7, 6], [5, 6, 0, 4]));
