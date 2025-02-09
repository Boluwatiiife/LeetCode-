// 1221. Split a String in Balanced Strings

const balancedStringSplit = function (s) {
  let balancee = 0;
  let anss = 0;
  for (char of s) {
    if (char === "L") {
      balancee++;
    } else {
      balancee--;
    }
    if (balancee === 0) {
      anss++;
    }
  }
  return anss;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("LLLLRRRRLRRL"));
