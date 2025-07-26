// 2682. Find the Losers of the Circular Game

const circularGameLosers = function (n, k) {
  let sett = new Set();
  sett.add(1);

  let temp = k;
  let i = 2;
  let xx = 1;
  while (true) {
    const num = xx + temp;
    let check = 0;
    if (num <= n) check = num;
    else {
      let diff = num;
      while (diff > n) {
        diff = diff - n;
      }
      check = diff;
    }
    if (sett.has(check)) break;
    sett.add(check);
    xx = check;
    temp = k * i;
    i++;
  }
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (!sett.has(i)) ans.push(i);
  }

  return ans;
};

console.log(circularGameLosers(5, 2));
console.log(circularGameLosers(4, 4));
console.log(circularGameLosers(3, 2));
