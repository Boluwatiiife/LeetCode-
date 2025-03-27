// 40. Combination Sum II

const combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let arr = [];

  function backtrackk(start, targ, path) {
    if (targ === 0) {
      arr.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] > targ) break;

      path.push(candidates[i]);
      backtrackk(i + 1, targ - candidates[i], path);
      path.pop();
    }
  }

  backtrackk(0, target, []);
  return arr;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
