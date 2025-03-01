// 2124. Check if All A's Appears Before All B's

const checkString = function (s) {
  let count = 0;

  for (char of s) {
    if (char === "a" && count > 0) return false;
    if (char === "b") count++;
  }
  return true;
};

console.log(checkString("aaabbb"));
console.log(checkString("abab"));
console.log(checkString("bbb"));
