// 264. Ugly Number II

const nthUglyNumber = function (n) {
  const ugly = new Array(n);
  ugly[0] = 1;
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  for (let i = 1; i < n; i++) {
    const next2 = ugly[i2] * 2;
    const next3 = ugly[i3] * 3;
    const next5 = ugly[i5] * 5;

    const next_ugly = Math.min(next2, next3, next5);
    ugly[i] = next_ugly;

    if (next_ugly === next2) i2++;
    if (next_ugly === next3) i3++;
    if (next_ugly === next5) i5++;
  }

  return ugly[n - 1];
};

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));
console.log(nthUglyNumber(1352));
