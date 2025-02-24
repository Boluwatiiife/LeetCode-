// 1869. Longer Contiguous Segments of Ones than Zeros

const checkZeroOnes = function (s) {
  let onee = 0,
    zeroo = 0;
  let maxx_one = 0,
    maxx_zero = 0;

  for (num of s) {
    if (num === "1") {
      onee++;
      maxx_zero = Math.max(zeroo, maxx_zero);
      zeroo = 0;
    } else if (num === "0") {
      zeroo++;
      maxx_one = Math.max(onee, maxx_one);
      onee = 0;
    }
  }
  maxx_one = Math.max(onee, maxx_one);
  maxx_zero = Math.max(zeroo, maxx_zero);

  if (maxx_one > maxx_zero) return true;
  return false;
};

console.log(checkZeroOnes("1101"));
console.log(checkZeroOnes("111000"));
console.log(checkZeroOnes("110100010"));
