// 978. Longest Turbulent Subarray

const maxTurbulenceSize = function (arr) {
  let greater = 1;
  let less = 1;
  let max = 1;
  let pre_num = arr[0];
  arr.shift();

  for (let num of arr) {
    if (num > pre_num) {
      greater = less + 1;
      less = 1;
    } else if (num < pre_num) {
      less = greater + 1;
      greater = 1;
    } else {
      greater = 1;
      less = 1;
    }
    max = Math.max(greater, less, max);
    pre_num = num;
  }

  return max;
};

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
console.log(maxTurbulenceSize([4, 8, 12, 16]));
console.log(maxTurbulenceSize([100]));
