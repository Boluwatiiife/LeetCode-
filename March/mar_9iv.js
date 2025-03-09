// 2500. Delete Greatest Value in Each Row

const deleteGreatestValue = function (grid) {
  let n = grid.length;
  for (let i = 0; i < n; i++) {
    grid[i] = grid[i].sort((a, b) => a - b);
  }
  let answerr = 0;
  while (grid[0].length > 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      let temp = grid[i];
      arr.push(temp[temp.length - 1]);
      grid[i].pop();
    }
    answerr = answerr + Math.max(...arr);
  }

  return answerr;
};

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
);
console.log(deleteGreatestValue([[10]]));
