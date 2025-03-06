// 2309. Greatest English Letter in Upper and Lower Case

const greatestLetter = function (s) {
  let lower = [],
    upper = [];

  for (char of s) {
    if (char >= "A" && char <= "Z") {
      upper.push(char);
    }
    if (char >= "a" && char <= "z") {
      lower.push(char);
    }
  }
  lower = lower.sort();
  upper = upper.sort();

  for (let i = upper.length - 1; i >= 0; i--) {
    if (lower.includes(upper[i].toLowerCase())) {
      return upper[i];
    }
  }

  return "";
  console.log(upper);
  console.log(lower);
};

console.log(greatestLetter("lEeTcOdE"));
console.log(greatestLetter("arRAzFif"));
console.log(greatestLetter("AbCdEfGhIjK"));
