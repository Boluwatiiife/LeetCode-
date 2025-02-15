// 1417. Reformat The String

const reformat = function (s) {
  s = s.split("");
  let strr = [];
  let numm = [];
  //   return s;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      strr.push(s[i]);
    } else {
      numm.push(s[i]);
    }
  }
  if (Math.abs(strr.length - numm.length) > 1) return "";

  if (numm.length > strr.length) [strr, numm] = [numm, strr];

  while (strr.length || numm.length) {
    if (strr.length) arr.push(strr.pop());
    if (numm.length) arr.push(numm.pop());
  }

  return arr.join("");
};

console.log(reformat("a0b1c2"));
console.log(reformat("a0b1c23"));
console.log(reformat("leetcode"));
console.log(reformat("1229857369"));
console.log(reformat("122985rfdds"));
