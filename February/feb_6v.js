// 1009. Compliment of Base 10 Integer

const bitwiseComplement = function (n) {
  n = n.toString(2);
  n = n.split("");
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "1") {
      n[i] = "0";
    } else if (n[i] === "0") {
      n[i] = "1";
    }
  }
  n = n.join("");
  n = parseInt(n, 2);
  return n;
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));
