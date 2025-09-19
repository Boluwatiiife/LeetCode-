// 474. Ones and Zeroes

const findMaxForm = function (strs, m, n) {
  function numberr(str) {
    let one = 0,
      zero = 0;
    for (const char of str) {
      if (char === "1") one++;
      if (char === "0") zero++;
    }
    return [zero, one];
  }
  let grid = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (const temp of strs) {
    const [zz, oo] = numberr(temp);
    for (let i = m; i >= zz; i--) {
      for (let j = n; j >= oo; j--) {
        grid[i][j] = Math.max(grid[i][j], 1 + grid[i - zz][j - oo]);
      }
    }
  }

  return grid[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxForm(["10", "0", "1"], 1, 1));
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 4, 3)); // 3
console.log(findMaxForm(["00011", "00001", "00001", "0011", "111"], 8, 5)); // 3
