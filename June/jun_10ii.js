// 1894. Find the Student that Will Replace the Chalk

const chalkReplacer = function (chalk, k) {
  const n = chalk.length;
  let arr = new Array(n);
  arr[0] = chalk[0];
  for (let i = 1; i < n; i++) {
    arr[i] = chalk[i] + arr[i - 1];
  }
  const mod = k % arr[n - 1];

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > mod) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};

console.log(chalkReplacer([5, 1, 5], 22));
console.log(chalkReplacer([3, 4, 1, 2], 25));
