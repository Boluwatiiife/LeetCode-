// 50. Pow(x, n)

const myPow = function (x, n) {
  let no = Math.abs(n);
  let xx = x;

  while (no > 1) {
    xx *= x;
    no--;
  }

  return n > 0 ? xx : 1 / xx;
};

// console.log(myPow(2.0, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2.0, -2));
// console.log(myPow(0.00001, 2147483647));

// my solution is not optimised at all
// i asked Ai for an optimised solution, and i felt stupid

const myPoww = function (x, n) {
  return x ** n; // simple and short
};
console.log(myPoww(2.0, 10));
console.log(myPoww(2.1, 3));
console.log(myPoww(2.0, -2));
console.log(myPoww(0.00001, 2147483647));
