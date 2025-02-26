// 1952. Three Divisors

const isThree = function (n) {
  let num = Math.sqrt(n);
  if (num % 1 !== 0) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

console.log(isThree(2));
console.log(isThree(4));
console.log(isThree(169));
console.log(isThree(25));
console.log(isThree(9));
console.log(isThree(32));
