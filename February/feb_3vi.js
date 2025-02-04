// 819 Most Common Word

const mostCommonWord = function (paragraph, banned) {
  let strr = paragraph.split("");
  //   return strr;
  for (let i = 0; i < strr.length; i++) {
    if (strr[i] === ",") {
      strr[i] = " ";
    }
  }
  strr = strr.join("");
  strr = strr.split(" ");
  //   return strr;
  for (let i = 0; i < strr.length; i++) {
    strr[i] = strr[i].toLowerCase();
    strr[i] = strr[i].split("");
    strr[i] = strr[i].filter((charr) => /^[a-zA-Z]$/.test(charr));
    strr[i] = strr[i].join("");
  }
  strr = strr.filter((xx) => xx !== "");
  //   return strr;
  for (let i = strr.length - 1; i >= 0; i--) {
    for (let j = 0; j < banned.length; j++) {
      if (strr[i] === banned[j]) {
        strr.splice(i, 1);
      }
    }
  }
  //   return strr;
  const count_map = new Map();

  for (const word of strr) {
    count_map.set(word, (count_map.get(word) || 0) + 1);
  }

  // find the word with the highest count
  let max_word = strr[0];
  let max_count = 0;

  for (const [key, value] of count_map) {
    if (value > max_count) {
      max_word = key;
      max_count = value;
    }
  }
  return max_word;
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
console.log(mostCommonWord("a.", []));
console.log(
  mostCommonWord(
    "the guy is very rich, he a backend dev, i hear, hear dev make money like mad mad mad mad",
    ["mad", "dev"]
  )
);
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
console.log(mostCommonWord("abc abc? abcd the jeff!", ["abc", "abcd", "jeff"]));

// time efficient solution

const commonWordnotBanned = function (paragraph, banned) {
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .split(/\s+/);

  const bannedSet = new Set(banned);
  const countMap = new Map();

  // Count occurrences of non-banned words
  for (const word of words) {
    if (word && !bannedSet.has(word)) {
      countMap.set(word, (countMap.get(word) || 0) + 1);
    }
  }

  // Find the most frequent non-banned word
  let maxWord = "";
  let maxCount = 0;

  for (const [word, count] of countMap) {
    if (count > maxCount) {
      maxWord = word;
      maxCount = count;
    }
  }

  return maxWord;
};

console.log(
  commonWordnotBanned(
    "Bob hit a ball, the hit BALL flew far after it was hit.",
    ["hit"]
  )
);
console.log(commonWordnotBanned("a.", []));
console.log(
  commonWordnotBanned(
    "the guy is very rich, he a backend dev, i hear, hear dev make money like mad mad mad mad",
    ["mad", "dev"]
  )
);
console.log(commonWordnotBanned("a, a, a, a, b,b,b,c, c", ["a"]));
console.log(
  commonWordnotBanned("abc abc? abcd the jeff!", ["abc", "abcd", "jeff"])
);
