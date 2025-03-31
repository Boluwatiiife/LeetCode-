// 91. Decode Ways

const numDecodings = function (s) {
  if (s[0] === "0") return 0;

  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] !== "0" ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    let onee = s.slice(i - 1, i);
    let two = s.slice(i - 2, i);

    if (onee >= "1" && onee <= "9") {
      dp[i] += dp[i - 1];
    }
    if (two >= "10" && two <= "26") {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
console.log(numDecodings("111111111111111111111111111111111111111111111"));
console.log(numDecodings("1234"));
