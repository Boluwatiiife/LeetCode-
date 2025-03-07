// 2523. Closest Prime Numbers in Range

const closestPrimes = function (left, right) {
  let prime = [];

  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }

  if (prime.length < 2) return [-1, -1];

  let minn = Infinity;
  for (let i = 1; i < prime.length; i++) {
    minn = Math.min(minn, prime[i] - prime[i - 1]);
  }

  for (let i = 1; i < prime.length; i++) {
    if (prime[i] - prime[i - 1] === minn) {
      return [prime[i - 1], prime[i]];
    }
  }
};

console.log(closestPrimes(10, 19));
console.log(closestPrimes(4, 6));
console.log(closestPrimes(19, 31));
