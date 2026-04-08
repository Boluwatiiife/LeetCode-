// 1358. Number of Substrings Containing All Three Characters

const numberOfSubstrings = function (s) {
  function isValid(word) {
    let sett = new Set();

    word.split("").map((xx) => sett.add(xx));
    return sett.size === 3;
  }
  const n = s.length;
  let grid = Array.from({ length: n }, () => "");
  let count = 0;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n; col++) {
      grid[row] += s[col];
      if (isValid(grid[row])) count++;
    }
  }

  return count;
};

console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3
console.log(numberOfSubstrings("abc")); // 1
console.log(numberOfSubstrings("abccc")); // 1
