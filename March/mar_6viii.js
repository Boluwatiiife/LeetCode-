// 2315. Count Asterisks

const countAsterisks = function (s) {
  s = s.split("|");
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      arr.push(s[i]);
    }
  }
  let temp = arr.join("");
  let count = 0;

  for (char of temp) {
    if (char === "*") {
      count++;
    }
  }
  return count;
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));
console.log(countAsterisks("iamprogrammer"));
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
