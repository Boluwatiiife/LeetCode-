// 1894. Find the Student that Will Replace the Chalk

const chalkReplacer = function (chalk, k) {
  let sum = chalk.reduce((a, b) => a + b, 0);
  while (k >= sum) {
    k -= sum;
  }

  for (let i = 0; i < chalk.length; i++) {
    let no = chalk[i];
    if (no > k) return i;
    else {
      k -= no;
    }
  }
};

console.log(chalkReplacer([5, 1, 5], 22));
console.log(chalkReplacer([3, 4, 1, 2], 25));
