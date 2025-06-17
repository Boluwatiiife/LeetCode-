// 2513. Minimize the Maximum of Two Arrays

const minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  function lcm(one, two) {
    let lcmm = Math.max(one, two);
    const temp = Math.max(one, two);
    let minn = Math.min(one, two);
    while (lcmm % minn !== 0) {
      lcmm += temp;
    }

    return lcmm;
  }

  function isPossible(maxNum) {
    const div1 = Math.floor(maxNum / divisor1);
    const div2 = Math.floor(maxNum / divisor2);
    const both = Math.floor(maxNum / lcm(divisor1, divisor2));
    // let totalAval = div1 - div2 + both;
    let only1 = maxNum - div1;
    let only2 = maxNum - div2;
    // let neither = maxNum - totalAval;
    // let need1 = uniqueCnt1;
    // let need2 = uniqueCnt2;
    const commonFree = maxNum - div1 - div2 + both;
    return (
      only1 >= uniqueCnt1 &&
      only2 >= uniqueCnt2 &&
      commonFree >= uniqueCnt1 + uniqueCnt2
    );
  }

  let left = 1;
  let right = 1e18;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
      ans = mid;
      right = mid - 1;
    } else left = mid + 1;
  }

  return [ans, left];
};

console.log(minimizeSet(2, 7, 1, 3));
console.log(minimizeSet(3, 5, 2, 1));
console.log(minimizeSet(2, 4, 8, 2));
console.log(minimizeSet(9, 4, 8, 3));
