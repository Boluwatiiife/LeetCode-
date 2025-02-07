// 1071. Greatest Common Divisor of Strings

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  function gcdd(a, b) {
    return b === 0 ? a : gcdd(b, a % b);
  }
  const gcddLength = gcdd(str1.length, str2.length);
  return str1.substring(0, gcddLength);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABCDEF", "ABC"));
console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);
