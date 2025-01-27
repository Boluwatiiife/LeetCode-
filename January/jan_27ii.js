// 520. Detect Capital
const detectCapitalUse = function (word) {
  let arr = word.split("");
  const upper = (letter) => letter === letter.toUpperCase();
  const lower = (letter) => letter === letter.toLowerCase();
  if (arr.every(upper)) return true;
  if (arr.every(lower)) return true;
  //   return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === arr[i].toUpperCase()) {
      arr.splice(i, 1);
      const lower = (letter) => letter === letter.toLowerCase();
      if (arr.every(lower)) return true;
    }
  }
  return false;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Google"));
console.log(detectCapitalUse("leetcoDe"));
console.log(detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf"));
