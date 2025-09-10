// 279. Perfect Squares

const numSquares = function (n) {
  function perfectSquares(num) {
    let ans = [];

    for (let i = 1; i <= num; i++) {
      ans.push(i * i);
      if (ans[ans.length - 1] >= num) break;
    }

    return ans;
  }

  const arr = perfectSquares(n);
  let ans = Array(n + 1).fill(Infinity);
  ans[0] = 0;

  let dex = 0;
  for (let i = 1; i < ans.length; i++) {
    while (arr[dex] <= i) {
      ans[i] = Math.min(ans[i - arr[dex]] + 1, ans[i]);
      dex++;
    }
    dex = 0;
  }

  return ans[n];
};

console.log(numSquares(12));
console.log(numSquares(13));
console.log(numSquares(43));
console.log(numSquares(1));
console.log(numSquares(0));
