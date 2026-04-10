// 3870. Count Commas in Range

const countCommas = function (n) {
  return n > 999 ? n - 999 : 0;
};

console.log(countCommas(1002));
console.log(countCommas(998));
console.log(countCommas(2998));
