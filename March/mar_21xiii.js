// 3330. Find the Original Typed String I

const possibleStringCount = function (word) {
  let count = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) count++;
  }

  return count;
};

console.log(possibleStringCount("abbcccc"));
console.log(possibleStringCount("abcd"));
console.log(possibleStringCount("aaaa"));
console.log(possibleStringCount("ere"));
console.log(possibleStringCount("bggyyb"));
console.log(possibleStringCount("aa"));
