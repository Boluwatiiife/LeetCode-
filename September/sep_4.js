// 3658. GCD of Odd and Even Sums

const gcdOfOddEvenSums = function (n) {
  let odd = 1,
    even = 2;
  let oo = 1,
    ee = 2;
  let ans = 0;

  for (let i = 2; i <= n; i++) {
    odd += oo + 2;
    even += ee + 2;
    oo += 2;
    ee += 2;
    if (odd % i === 0 && even % i === 0) ans = Math.max(ans, i);
  }

  return n === 1 ? 1 : ans;
};

console.log(gcdOfOddEvenSums(1));
console.log(gcdOfOddEvenSums(2));
console.log(gcdOfOddEvenSums(4));
console.log(gcdOfOddEvenSums(5));
console.log(gcdOfOddEvenSums(65));
console.log(gcdOfOddEvenSums(1000));
