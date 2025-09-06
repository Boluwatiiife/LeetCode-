// 131. Palindrome Partitioning

const partition = function (s) {
  function isPalindrome(word) {
    const n = word.length;

    let i = 0,
      j = n - 1;
    while (i < j) {
      if (word[i] !== word[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  function generateCombinations(grid) {
    const result = [];

    function dfs(index, path) {
      if (index >= grid.length) {
        result.push([...path]); // store a valid combination
        return;
      }

      for (let word of grid[index]) {
        path.push(word);
        dfs(index + word.length, path);
        path.pop(); // backtrack
      }
    }

    dfs(0, []);
    return result;
  }

  const n = s.length;
  let grid = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      const temp = s.slice(i, k + 1);
      if (isPalindrome(temp)) grid[i].push(temp);
    }
  }

  return generateCombinations(grid);
};

console.log(partition("aab"));
console.log(partition("a"));
console.log(partition("aabb"));
console.log(partition("abba"));
