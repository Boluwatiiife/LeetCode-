// Sum of Integers with Maximum Digit Range

const maxDigitRange = function (nums) {
  let ans = 0,
    max = 0;
  let temp = [];

  for (const no of nums) {
    const arr = no
      .toString()
      .split("")
      .map((xx) => Number(xx));
    const maxx = Math.max(...arr),
      minn = Math.min(...arr);
    max = Math.max(max, maxx - minn);
    temp.push([maxx - minn, no]);
  }

  temp.map((arr) => {
    if (arr[0] === max) ans += arr[1];
  });

  return ans;
};

console.log(maxDigitRange([5724, 111, 350]));
console.log(maxDigitRange([90, 900]));
console.log(maxDigitRange([76207, 65921]));
