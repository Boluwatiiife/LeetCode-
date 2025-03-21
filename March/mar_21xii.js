// 3318. Find X-Sum of All K-Long Subarrays I

const findXSum = function (nums, k, x) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length + 1 - k) break;
    let temp = nums.slice(i, k + i);
    temp.sort((a, b) => b - a);
    let freqq = new Map();
    for (no of temp) {
      freqq.set(no, (freqq.get(no) || 0) + 1);
    }

    let count = [];
    let maxx = 0;
    for (no of temp) {
      count.push([no, freqq.get(no)]);
      maxx = Math.max(maxx, freqq.get(no));
    }
    count.sort((a, b) => b[1] - a[1]);

    let sum = 0;
    let check = new Set();
    for (let i = 0; i < count.length; i++) {
      let xx = count[i];
      sum += xx[0];
      check.add(xx[0]);
      if (check.size > x) {
        sum -= xx[0];
        break;
      }
    }
    arr.push(sum);
  }
  return arr;
};

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2));
console.log(findXSum([3, 8, 7, 8, 7, 5], 2, 2));
console.log(findXSum([7, 4, 10, 3, 5], 1, 1));
console.log(findXSum([1, 2, 3, 4, 5], 3, 2));
