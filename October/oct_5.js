// 3697. Compute Decimal Representation

const decimalRepresentation = function (n) {
  const str = n.toString();
  const nn = str.length;
  let ans = [];

  for (let i = 0; i < nn; i++) {
    const no = Number(str[i]);
    if (no > 0) ans.push(Number(str[i] + "0".repeat(nn - i - 1)));
  }

  return ans;
};

console.log(decimalRepresentation(537));
console.log(decimalRepresentation(102));
console.log(decimalRepresentation(6));
console.log(decimalRepresentation(3010343));
