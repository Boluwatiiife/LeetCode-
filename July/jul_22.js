// 1646. Get Maximum in Generated Array

const getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  let ans = new Array(n + 1);
  ans[0] = 0;
  ans[1] = 1;
  let max = 1;

  for (let i = 2; i < ans.length; i++) {
    if (i % 2 === 0) {
      ans[i] = ans[i / 2];
      max = Math.max(max, ans[i]);
    } else {
      const no = Math.floor(i / 2);
      ans[i] = ans[no] + ans[no + 1];
      max = Math.max(max, ans[i]);
    }
  }

  return max;
};

console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(2));
console.log(getMaximumGenerated(3));
console.log(getMaximumGenerated(0));
console.log(getMaximumGenerated(1));
