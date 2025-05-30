// 3239. Minimum Number of Flips to Make Binary Grid Palindromic I

const minFlips = function (grid) {
  function column(arr) {
    const n = arr.length;
    let ans = [];
    for (let i = 0; i < arr[0].length; i++) {
      let temp = [];
      for (j = 0; j < n; j++) {
        temp.push(arr[j][i]);
      }
      ans.push(temp);
    }
    return ans;
  }
  function checkk(grid) {
    let count = 0;
    for (const arr of grid) {
      const n = arr.length;
      let left = 0;
      let right = n - 1;
      while (left < right) {
        if (arr[left] !== arr[right]) {
          count++;
        }
        left++;
        right--;
      }
    }
    return count;
  }
  const colu = column(grid);
  return Math.min(checkk(grid), checkk(colu));
};

console.log(
  minFlips([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);
console.log(
  minFlips([
    [0, 1],
    [0, 1],
    [0, 0],
  ])
);
console.log(minFlips([[1], [0]]));
