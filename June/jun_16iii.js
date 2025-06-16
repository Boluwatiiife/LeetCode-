// 2501. Longest Square Streak in an Array

const longestSquareStreak = function (nums) {
  let max = -1;
  let set = new Set(nums);
  let setArr = Array.from(set.values()).sort((a, b) => a - b);

  for (let i = 0; i < setArr.length; i++) {
    let curr = setArr[i];
    let count = 0;
    while (set.has(curr)) {
      set.delete(curr);
      curr = curr ** 2;
      count++;
    }
    max = Math.max(max, count);
  }

  return max > 1 ? max : -1;
};

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]));
console.log(longestSquareStreak([2, 3, 5, 6, 7]));
console.log(longestSquareStreak([1, 2, 2, 4, 6, 6, 16, 43]));
