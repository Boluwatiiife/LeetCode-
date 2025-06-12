// 2055. Plates Between Candles

const platesBetweenCandles = function (s, queries) {
  let prefix = [];
  let candles = [];
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") sum++;
    if (s[i] === "|") candles.push(i);
    prefix.push(sum);
  }
  let ans = [];
  for (let [i, j] of queries) {
    let left = 0;
    let right = candles.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (candles[mid] >= i) right = mid - 1;
      else left = mid + 1;
    }
    let leftt = 0;
    let rightt = candles.length - 1;
    while (leftt <= rightt) {
      const mid = Math.floor((leftt + rightt) / 2);
      if (candles[mid] <= j) leftt = mid + 1;
      else rightt = mid - 1;
    }
    if (left <= rightt) {
      ans.push(prefix[candles[rightt]] - prefix[candles[left]]);
    } else ans.push(0);
  }

  return ans;
};

console.log(
  platesBetweenCandles("**|**|***|", [
    [2, 5],
    [5, 9],
  ])
);
console.log(
  platesBetweenCandles("***|**|*****|**||**|*", [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ])
);
