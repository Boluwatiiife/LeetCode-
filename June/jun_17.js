// 2513. Minimize the Maximum of Two Arrays

const minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  function gcd(m, n) {
    if (m > n) return gcd(n, m);
    if (m === 0) return n;
    return gcd(n % m, m);
  }
  const g = gcd(divisor1, divisor2);
  const lcm = (divisor1 * divisor2) / g;

  function isPossible(maxNum) {
    const notByA = maxNum - Math.floor(maxNum / divisor1);
    const notByB = maxNum - Math.floor(maxNum / divisor2);
    const byBoth = Math.floor(maxNum / lcm);
    const notByEither = notByA + notByB - (maxNum - byBoth);
    const notByAOnly = notByA - notByEither;
    const notByBOnly = notByB - notByEither;

    if (notByA < uniqueCnt1) return false;
    if (notByAOnly >= uniqueCnt1) return notByB >= uniqueCnt2;
    const borrowed = uniqueCnt1 - notByAOnly;
    const rmainB = notByB - borrowed;
    return rmainB >= uniqueCnt2;
  }

  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;
  // let right = 1e18;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (isPossible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

console.log(minimizeSet(2, 7, 1, 3)); //4
console.log(minimizeSet(3, 5, 2, 1)); //3
console.log(minimizeSet(2, 4, 8, 2)); //15
console.log(minimizeSet(9, 4, 8, 3));
