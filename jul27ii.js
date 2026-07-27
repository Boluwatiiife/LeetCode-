// 4000. Largest Integer With Given Digit Sum

const largestInteger = function (n, s) {
  let num = Number("9".repeat(n));

  while (num >= 0) {
    let temp = num
      .toString()
      .split("")
      .map((no) => Number(no))
      .reduce((a, b) => a + b || 0);
    if (temp === s) return num;
    num--;
  }

  return -1;
};

console.log(largestInteger(2, 9));
console.log(largestInteger(2, 19));
console.log(largestInteger(5, 0));
