// 1189. Maximum Number of Balloons

const maxNumberOfBalloons = function (text) {
  const reqquiredChars = new Set(["b", "a", "l", "o", "n"]);
  const char_count = {};

  for (let char of text) {
    if (reqquiredChars.has(char)) {
      char_count[char] = (char_count[char] || 0) + 1;
    }
  }
  if (Object.keys(char_count).length < 5) return 0;

  return Math.min(
    char_count["b"] || 0,
    char_count["a"] || 0,
    Math.floor((char_count["l"] || 0) / 2),
    Math.floor((char_count["o"] || 0) / 2),
    char_count["n"] || 0
  );
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
