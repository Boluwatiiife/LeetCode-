// 2114. Maximum Number of Words Found in Sentences

const mostWordsFound = function (sentences) {
  let curr = 0,
    maxx = 0;

  for (char of sentences) {
    char = char.split(" ");
    curr = char.length;
    maxx = Math.max(curr, maxx);
  }
  return maxx;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
