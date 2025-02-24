// 1859. Sorting the Sentence

const sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a.slice(-1) - b.slice(-1))
    .map((word) => word.slice(0, -1))
    .join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
console.log(
  sortSentence("Nigeria8 in7 Backend5 the3 best4 of2 One1 developers6")
);
