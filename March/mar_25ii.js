// 12. Integer to Roman

const intToRoman = function (num) {
  const roman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";
  for ([no, rom] of roman) {
    while (num >= no) {
      result += rom;
      num -= no;
    }
  }
  return result;
};

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(2025));
console.log(intToRoman(500));
