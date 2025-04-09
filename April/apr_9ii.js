// 400. Nth Digit

const findNthDigit = function (n) {
  let len = 1,
    count = 9,
    start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  const number = start + Math.floor((n - 1) / len);

  const dex = (n - 1) % len;
  let no = number.toString()[dex];

  return Number(no);
};

console.log(findNthDigit(3));
console.log(findNthDigit(11));
console.log(findNthDigit(100000000));
