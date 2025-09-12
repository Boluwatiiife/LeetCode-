// 3227. Vowels Game in a String

const doesAliceWin = function (s) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of s) {
    if (vowel.includes(char)) count++;
  }
  if (count === 0) return false;
  return true;
};

console.log(doesAliceWin("leetcoder"));
console.log(doesAliceWin("bbcd"));
