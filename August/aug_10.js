// 405. Convert a Number to Hexadecimal

const toHex = function (num) {
  if (num === 0) return "0";

  if (num < 0) {
    num = 0xffffffff + num + 1;
  }

  const hexx = "0123456789abcdef";
  let ans = "";

  while (num > 0) {
    const digit = num & 0xf;
    ans = hexx[digit] + ans;
    num >>>= 4;
  }

  return ans;
};

console.log(toHex(26));
console.log(toHex(-1));
