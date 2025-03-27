// 39. Combination Sum

const combinationSum = function (candidates, target) {
  let arr = [];

  function backtrackk(start, curr_combo, sum) {
    if (sum === target) {
      arr.push([...curr_combo]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      curr_combo.push(candidates[i]);
      backtrackk(i, curr_combo, sum + candidates[i]);
      curr_combo.pop();
    }
  }
  backtrackk(0, [], 0);
  return arr;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
console.log(combinationSum([3, 5, 8], 11));
console.log(combinationSum([7, 3, 2], 18));
