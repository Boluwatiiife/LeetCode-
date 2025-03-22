// 3407. Substring Matching Pattern

const hasMatch = function (s, p) {
  let xx = p.split("*");
  let joinn = xx.join("");
  if (s.includes(joinn)) return true;

  if (s.includes(xx[0])) {
    let tryy = s.slice(s.indexOf(xx[0]) + xx[0].length);
    if (tryy.includes(xx[1])) {
      return true;
    }
  }
  return false;
};

console.log(hasMatch("leetcode", "ee*e"));
console.log(hasMatch("car", "c*v"));
console.log(hasMatch("luck", "u*"));
console.log(hasMatch("tokk", "t*t"));
console.log(hasMatch("tsssts", "t*t"));
