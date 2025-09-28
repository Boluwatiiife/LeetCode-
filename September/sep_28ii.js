// 650. 2 Keys Keyboard

const minSteps = function (n) {
  if (n === 1) return 0;
  let ans = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    ans[i] = i;
    for (let j = Math.floor(i / 2); j >= 1; j--) {
      if (i % j === 0) {
        ans[i] = Math.min(ans[i], ans[j] + i / j);
        break;
      }
    }
  }

  return ans[n];
};

console.log(minSteps(3));
console.log(minSteps(1));
console.log(minSteps(7)); // 6
console.log(minSteps(10)); // 7
console.log(minSteps(24)); // 9
console.log(minSteps(4));
console.log(minSteps(9));
console.log(minSteps(18));
