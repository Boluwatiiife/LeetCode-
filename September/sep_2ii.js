// 91. Decode Ways

const numDecodings = function (s) {
  const n = s.length;
  let ans = Array(n + 1).fill(0);
  ans[0] = 1;
  ans[1] = Number(s[0]) > 0 && Number(s[0]) < 10 ? 1 : 0;

  for (let i = 2; i < ans.length; i++) {
    const one = Number(s[i - 1]);
    const two = Number(s[i - 2] + s[i - 1]);

    if (one > 0) ans[i] += ans[i - 1];
    if (two > 9 && two < 27) ans[i] += ans[i - 2];
  }

  return ans[n];
};

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
console.log(numDecodings("11106"));
