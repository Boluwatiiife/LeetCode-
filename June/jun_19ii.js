// 2601. Prime Subtraction Operation

const primeSubOperation = function (nums) {
  const primes = getPrimes();
  let prev = 0;

  for (let i = 0; i < nums.length; i++) {
    const no = nums[i];
    let best = -1;
    let left = 0;
    let right = primes.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const p = primes[mid];
      if (p < no && no - p > prev) {
        best = no - p;
        left = mid + 1;
      } else right = mid - 1;
    }
    if (best !== -1) {
      prev = best;
    } else {
      if (no > prev) {
        prev = no;
      } else {
        return false;
      }
    }
  }

  return true;
};
function getPrimes() {
  const max = 1000;
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}

console.log(primeSubOperation([4, 9, 6, 10]));
console.log(primeSubOperation([6, 8, 11, 12]));
console.log(primeSubOperation([5, 8, 3]));
console.log(primeSubOperation([998, 2]));
console.log(primeSubOperation([2, 2]));
