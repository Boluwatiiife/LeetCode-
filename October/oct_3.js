// 678. Valid Parenthesis String

const checkValidString = function (s) {
  let minn = 0,
    maxx = 0;

  for (const ch of s) {
    if (ch === "(") {
      minn++;
      maxx++;
    }
    if (ch === ")") {
      minn--;
      maxx--;
      if (minn < 0) minn = 0;
    }
    if (ch === "*") {
      minn--;
      maxx++;
      if (minn < 0) minn = 0;
    }
    if (maxx < 0) return false;
  }
  return minn === 0 ? true : false;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
console.log(checkValidString("())"));
