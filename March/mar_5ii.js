// 2278. Percentage of Letter in String

const percentageLetter = function (s, letter) {
  let num = 0;

  for (char of s) {
    if (char === letter) {
      num++;
    }
  }

  return Math.floor((num / s.length) * 100);
};

console.log(percentageLetter("foobar", "o"));
console.log(percentageLetter("jjjj", "k"));
