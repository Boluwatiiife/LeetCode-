// 3622. Check Divisibility by Digit Sum and Product

const checkDivisibility = function (n) {
  let sum = 0,
    product = 1;
  const num = n
    .toString()
    .split("")
    .map((xx) => Number(xx));

  for (const no of num) {
    sum += no;
    product *= no;
  }

  return n % (sum + product) === 0;
};

console.log(checkDivisibility(99));
console.log(checkDivisibility(23));
console.log(checkDivisibility(144));
console.log(checkDivisibility(10));
