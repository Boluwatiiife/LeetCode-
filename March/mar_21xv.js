// 3345. Smallest Divisible Digit Product I

const smallestNumber = function (n, t) {
  for (let i = n; i < Infinity; i++) {
    let char = i.toString();
    let num = 1;
    for (no of char) {
      num *= no;
    }
    if (num % t === 0) return i;
  }
};

console.log(smallestNumber(10, 2));
console.log(smallestNumber(15, 3));
