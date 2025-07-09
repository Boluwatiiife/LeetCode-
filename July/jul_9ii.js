// 748. Shortest Completing Word

const shortestCompletingWord = function (licensePlate, words) {
  let freq = new Map();
  let plates = [];
  for (const char of licensePlate) {
    if (isNaN(char)) {
      freq.set(char.toLowerCase(), (freq.get(char.toLowerCase()) || 0) + 1);
      if (!plates.includes(char.toLowerCase())) plates.push(char.toLowerCase());
    }
  }
  let leng = Infinity;
  let ans = "";

  for (const word of words) {
    let arr = [];
    let mapp = new Map();
    for (char of word) {
      mapp.set(char, (mapp.get(char) || 0) + 1);
      if (!arr.includes(char)) arr.push(char);
    }
    if (
      plates.every(
        (temp) => arr.includes(temp) && mapp.get(temp) >= freq.get(temp)
      )
    ) {
      if (word.length < leng) {
        ans = word;
        leng = word.length;
      }
    }
  }

  return ans;
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);
console.log(
  shortestCompletingWord("GrC8950", [
    "measure",
    "other",
    "every",
    "base",
    "according",
    "level",
    "meeting",
    "none",
    "marriage",
    "rest",
  ])
);
