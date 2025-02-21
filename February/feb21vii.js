// 1688. Count of Matches in Tournament

const numberOfMatches = function (n) {
  if (n === 1) return 0;
  let resultt = [];
  let anss = n;
  while (anss > 1) {
    if (anss % 2 !== 0) {
      resultt.push(1);
      anss = Math.floor(anss / 2);
      resultt.push(anss);
    } else {
      anss = anss / 2;
      resultt.push(anss);
    }
  }
  return resultt.reduce((a, b) => a + b);
};

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
console.log(numberOfMatches(1));
