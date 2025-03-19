// 3110. Score of a String

const scoreOfString = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let one = s[i],
      two = s[i + 1];
    let temp = Math.abs(one.charCodeAt(0) - two.charCodeAt(0));
    sum += temp;
  }
  return sum;
};

console.log(scoreOfString("hello"));
console.log(scoreOfString("zaz"));
