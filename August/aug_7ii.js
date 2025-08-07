// 3591. Check if Any Element Has Prime Frequency

const checkPrimeFrequency = function (nums) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let freq = new Map();

  for (const no of nums) {
    freq.set(no, (freq.get(no) || 0) + 1);
  }

  const arr = [...freq.values()];
  for (const num of arr) {
    if (isPrime(num)) return true;
  }

  return false;
};

console.log(checkPrimeFrequency([1, 2, 3, 4, 5, 4]));
console.log(checkPrimeFrequency([1, 2, 3, 4, 5]));
console.log(checkPrimeFrequency([2, 2, 2, 4, 4]));
