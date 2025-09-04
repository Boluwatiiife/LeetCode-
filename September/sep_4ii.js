// 3663. Find The Least Frequent Digit

const getLeastFrequentDigit = function (n) {
  let dex = Array(10).fill(0);
  const nums = n
    .toString()
    .split("")
    .map((x) => Number(x));

  for (const no of nums) {
    dex[no]++;
  }

  const nnn = dex.filter((no) => no > 0);

  let min = Math.min(...nnn);
  for (const no of dex) {
    if (no === min) return dex.indexOf(no);
  }
};

console.log(getLeastFrequentDigit(1553322));
console.log(getLeastFrequentDigit(723344511));
console.log(getLeastFrequentDigit(2));
