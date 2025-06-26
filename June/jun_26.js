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
    let no = nums[queries[j]];
    let temp = unique[no];
    const len = temp.length;
    for (let i = 0; i < len; i++) {
      let use = 0;
      let circle = Infinity;
      if (temp[i] === dex) continue;
      use = Math.abs(temp[i] - dex);
      //   if (dex > temp[i]) {
      circle = m - dex + temp[i];
      //   }
      ans[j] = Math.min(ans[j], use, circle);
    }
  }
  const result = ans.map((xx) => (xx === Infinity ? -1 : xx));

  //   return unique;
  return result;
};

console.log(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5]));
console.log(solveQueries([1, 2, 3, 4], [0, 1, 2, 3]));
console.log(solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]));
console.log(solveQueries([6, 12, 17, 9, 16, 7, 6], [5, 6, 0, 4]));
