// 1370. Increasing Decreasing String

const sortString = function (s) {
  const arr = s.split("").sort();
  let grid = [];

  let temp = [];
  for (i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp[0] !== arr[i]) {
      temp.pop();
      grid.push(temp);
      temp = [];
      i--;
    }
  }
  grid.push(temp);

  let ans = "";
  while (grid.some((a) => a.length > 0)) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i].length > 0) {
        ans += grid[i][0];
        grid[i].pop();
      }
    }
    for (let i = grid.length - 1; i >= 0; i--) {
      if (grid[i].length > 0) {
        ans += grid[i][0];
        grid[i].pop();
      }
    }
  }

  return ans;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
