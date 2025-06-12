// 2064. Minimized Maximum of Products Distributed to Any Store

const minimizedMaximum = function (n, quantities) {
  function canDistribute(x) {
    let sum = 0;
    for (const no of quantities) {
      sum += Math.ceil(no / x);
    }
    return sum <= n;
  }

  let left = 1,
    right = Math.max(...quantities);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canDistribute(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minimizedMaximum(6, [11, 6]));
console.log(minimizedMaximum(7, [15, 10, 10]));
console.log(minimizedMaximum(1, [100000]));
console.log(minimizedMaximum(2, [5, 7]));
