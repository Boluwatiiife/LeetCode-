// 509. Fibonacci Number
const fib = function (n) {
  if (n === 0) return n;
  if (n === 1) return n;
  let aaa = 0;
  let bbb = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = aaa + bbb;
    aaa = bbb;
    bbb = result;
  }

  return result;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(46));
