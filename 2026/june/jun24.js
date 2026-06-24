// 3954. Sum of Compatible Numbers in Range I

const sumOfGoodIntegers = function (n, k) {
  let ans = 0;

  for (let i = n - k; i < Infinity; i++) {
    if (Math.abs(n - i) > k) break;
    if (i > 0 && (n & i) == 0) ans += i;
  }

  return ans;
};

console.log(sumOfGoodIntegers(2, 3));
console.log(sumOfGoodIntegers(5, 1));
console.log(sumOfGoodIntegers(6, 2)); //8
console.log(sumOfGoodIntegers(1, 13)); //56
