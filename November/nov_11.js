// 3736. Minimum Moves to Equal Array Elements III

const minMoves = function (nums) {
  const max = Math.max(...nums);
  let ans = 0;

  for (const no of nums) {
    ans += max - no;
  }

  return ans;
};

console.log(minMoves([2, 1, 3]));
console.log(minMoves([4, 4, 5]));
