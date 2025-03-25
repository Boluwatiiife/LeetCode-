// 11. Container With Most Water

const maxArea = function (height) {
  for (let i = 0; i < height.length; i++) {
    height[i] = [height[i], i];
  }
  let m = 0;
  let beff = height[m];
  let n = height.length - 1;
  let aftt = height[n];

  let max = 0;
  for (let i = 0; i < height.length; i++) {
    let num = Math.min(beff[0], aftt[0]);
    let temp = Math.abs(beff[1] - aftt[1]);
    max = Math.max(max, num * temp);

    if (beff[0] < aftt[0]) {
      m++;
      beff = height[m];
    } else if (aftt[0] < beff[0]) {
      n--;
      aftt = height[n];
    } else if (beff[0] === aftt[0]) {
      m++;
      beff = height[m];
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
