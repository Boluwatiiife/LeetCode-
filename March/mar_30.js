// 72. Edit Distance

const minDistance = function (word1, word2) {
  let mm = word1.length,
    nn = word2.length;
  let arr = Array.from({ length: mm + 1 }, () => Array(nn + 1).fill(0));

  for (let i = 0; i <= mm; i++) arr[i][0] = i;
  for (let j = 0; j <= nn; j++) arr[0][j] = j;

  for (let i = 1; i <= mm; i++) {
    for (let j = 1; j <= nn; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] =
          Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]) + 1;
      }
    }
  }

  return arr[mm][nn];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
console.log(minDistance("", "a"));
