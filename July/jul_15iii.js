// 1002. Find Common Characters

const commonChars = function (words) {
  function countt(arr) {
    let freq = new Map();
    for (const char of arr) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }
    return freq;
  }
  let freq = new Map();

  for (const word of words) {
    for (const char of word) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }
  }
  let lett = [...freq.keys()];
  let unique = [];
  let ans = [];

  for (const char of lett) {
    if (words.every((word) => word.includes(char))) {
      unique.push(char);
    }
  }
  let xxx = new Array(unique.length).fill(Infinity);

  for (const word of words) {
    const count = countt(word);
    for (let i = 0; i < unique.length; i++) {
      xxx[i] = Math.min(xxx[i], count.get(unique[i]));
    }
  }

  for (let i = 0; i < unique.length; i++) {
    let no = 0;
    while (no < xxx[i]) {
      ans.push(unique[i]);
      no++;
    }
  }

  return ans;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
console.log(
  commonChars([
    "bbddabab",
    "cbcddbdd",
    "bbcadcab",
    "dabcacad",
    "cddcacbc",
    "ccbdbcba",
    "cbddaccc",
    "accdcdbb",
  ])
);
