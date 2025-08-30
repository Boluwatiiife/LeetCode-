// 1137. N-th Tribonacci Number

const tribonacci = function (n) {
  let ans = Array(38).fill(0);
  ans[0] = 0;
  ans[1] = 1;
  ans[2] = 1;

  for (let i = 3; i <= n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2] + ans[i - 3];
  }

  return ans[n];
};

console.log(tribonacci(4));
console.log(tribonacci(25));
