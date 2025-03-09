// 2485. Find the Pivot Integer

const pivotInteger = function (n) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    let before = nums.slice(0, i + 1);
    let after = nums.slice(i);
    let xxx = before.reduce((a, b) => a + b, 0);
    let yyy = after.reduce((a, b) => a + b, 0);

    if (xxx === yyy) return nums[i];
  }
  return -1;
};

console.log(pivotInteger(8));
console.log(pivotInteger(1));
console.log(pivotInteger(4));
