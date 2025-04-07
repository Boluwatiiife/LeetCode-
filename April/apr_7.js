// write a function that returns the nth fib number

const fibonaccii = function (n) {
  let prev = 1,
    curr = 1,
    count = 2;

  while (count < n) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
    count++;
  }
  return curr;
};

console.log(fibonaccii(5));
console.log(fibonaccii(6));
console.log(fibonaccii(22));
