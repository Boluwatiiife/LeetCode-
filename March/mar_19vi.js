// 3120. Count the Number of Special Characters I

const numberOfSpecialChars = function (word) {
  let upper = new Set(),
    lower = new Set();

  for (char of word) {
    if (char === char.toUpperCase()) {
      upper.add(char.toLowerCase());
    }
    if (char === char.toLowerCase()) {
      lower.add(char);
    }
  }
  upper = [...upper];
  lower = [...lower];

  let count = 0;

  for (xx of upper) {
    for (yy of lower) {
      if (xx === yy) {
        count++;
      }
    }
  }
  return count;
};

console.log(numberOfSpecialChars("aaAbcBC"));
console.log(numberOfSpecialChars("abc"));
console.log(numberOfSpecialChars("abBCab"));
