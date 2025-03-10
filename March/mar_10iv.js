// 2529. Maximum Count of Positive Integer and Negative Integer

const maximumCount = function (nums) {
  let posi = 0;
  let nega = 0;

  for (no of nums) {
    if (no > 0) posi++;
    if (no < 0) nega++;
  }
  return Math.max(posi, nega);
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([5, 20, 66, 1314]));
