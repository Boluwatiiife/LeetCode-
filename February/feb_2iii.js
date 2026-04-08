// 748. Shortest Completing Word

const shortestCompletingWord = function (licensePlate, words) {
  const removee = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "];
  const platee = licensePlate
    .toLowerCase()
    .split("")
    .filter((xx) => !removee.includes(xx));

  return platee;
  let result = [];
  //   for (let i = 0; i < words.length; i++) {
  //     let arr = words[i].split("");
  //     // return arr;
  //     if (platee.every((xx) => arr.includes(xx))) {
  //       result.push(words[i]);
  //     }
  //   }
  return result;
  return platee;
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);
