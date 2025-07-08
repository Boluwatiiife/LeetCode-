// 693. Binary Number with Alternating Bits

const hasAlternatingBits = function (n) {
  const num = n.toString(2);
  for (let i = 1; i < num.length; i++) {
    if (num[i] === num[i - 1]) return false;
  }

  return true;
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
