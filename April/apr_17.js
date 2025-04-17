// 1888. Minimum Number of Flips to Make the Binary String Alternating

const minFlips = function (s) {
  const n = s.length;
  const char = s + s;
  const onee = [],
    twoo = [];

  for (let i = 0; i < 2 * n; i++) {
    onee.push(i % 2 === 0 ? "0" : "1");
    twoo.push(i % 2 === 0 ? "1" : "0");
  }

  let diff1 = 0;
  let diff2 = 0;
  let minn = Infinity;

  for (let i = 0; i < 2 * n; i++) {
    if (char[i] !== onee[i]) diff1++;
    if (char[i] !== twoo[i]) diff2++;

    if (i >= n) {
      if (char[i - n] !== onee[i - n]) diff1--;
      if (char[i - n] !== twoo[i - n]) diff2--;
    }

    if (i >= n - 1) {
      minn = Math.min(minn, diff1, diff2);
    }
  }
  return minn;
};

console.log(minFlips("111000"));
console.log(minFlips("010"));
console.log(minFlips("1110"));
console.log(minFlips("01001001101"));
console.log(minFlips("001000000010"));
