// 3300. Minimum Element After Replacement With Digit Sum

const minElement = function (nums) {
  let ans = Infinity;

  for (const no of nums) {
    let num = no
      .toString()
      .split("")
      .map((no) => Number(no))
      .reduce((a, b) => a + b, 0);
    ans = Math.min(ans, num);
  }

  return ans;
};

console.log(minElement([10, 12, 13, 14]));
console.log(minElement([1, 2, 3, 4]));
console.log(minElement([999, 19, 199]));
