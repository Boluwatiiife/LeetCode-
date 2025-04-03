// 204. Count Primes

const countPrimes = function (n) {
  let is_prime = new Array(n + 1).fill(true);
  is_prime[0] = is_prime[1] = false;

  //   for (let i = 2; i * i <= n; i++) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (is_prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        is_prime[j] = false;
      }
    }
  }

  return is_prime
    .map((val, dex) => (val ? dex : -1))
    .filter((num) => num !== -1)
    .filter((no) => no < n).length;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.log(countPrimes(30));
console.log(countPrimes(2));
