// 788. Rotated Digits

const rotatedDigits = function (n) {
  let count = 0;
  let nums = [0, 1, 2, 5, 6, 8, 9];

  for (let i = 1; i <= n; i++) {
    const arr = i
      .toString()
      .split("")
      .map((x) => Number(x));

    if (arr.every((no) => nums.includes(no))) {
      if (
        arr.includes(2) ||
        arr.includes(5) ||
        arr.includes(6) ||
        arr.includes(9)
      ) {
        count++;
      }
    }
  }

  return count;
};

console.log(rotatedDigits(10));
console.log(rotatedDigits(1));
console.log(rotatedDigits(2));
console.log(rotatedDigits(21));
console.log(rotatedDigits(857));
