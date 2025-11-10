// 3726. Remove Zeros in Decimal Representation

const removeZeros = function (n) {
  const arr = n.toString().split("");
  let ans = "";

  for (const no of arr) {
    if (no !== "0") ans += no;
  }

  return Number(ans);
};

console.log(removeZeros(1020030));
console.log(removeZeros(1));
