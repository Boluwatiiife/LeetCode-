// 191. Number of 1 Bits

const hammingWeight = function (n) {
  const num = n
    .toString(2)
    .split("")
    .filter((xx) => xx === "1");

  return num.length;
};

console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
