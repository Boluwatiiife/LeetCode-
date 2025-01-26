// 507. Perfect Number

const checkPerfectNumber = function (num) {
  let divisors = [];
  let i = 0;
  while (i < num) {
    if (num % i === 0) divisors.push(i);
    i++;
  }
  if (divisors.reduce((a, b) => a + b) === num) return true;
  return false;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(54));
console.log(checkPerfectNumber(99999992));

// time efficient solution
const perfectt_nummm = function (num) {
  if (num <= 1) return false; // No perfect numbers <= 1

  let sum = 1; // Start with 1 because 1 is a divisor of all numbers

  // Iterate only up to the square root of `num`
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i; // Add the divisor
      if (i !== num / i) {
        sum += num / i; // Add the corresponding pair divisor
      }
    }
  }

  return sum === num; // Check if the sum equals the number
};

console.log(perfectt_nummm(28));
console.log(perfectt_nummm(7));
console.log(perfectt_nummm(54));
console.log(perfectt_nummm(99999992));
