// 3622. Check Divisibility by Digit Sum and Product

const checkDivisibility = function (n) {
  const arr = n
    .toString()
    .split("")
    .map((xx) => Number(xx));

  const one = arr.reduce((a, b) => a + b);
  const two = arr.reduce((a, b) => a * b);

  return n % (one + two) === 0;
};

console.log(checkDivisibility(99));
console.log(checkDivisibility(23));
console.log(checkDivisibility(2));
