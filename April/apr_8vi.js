// count construct
// can you form target by concatnating elements from wordbank array, return number of possible ways

const countConstruct = (target, wordBank) => {
  const m = target.length;
  const table = Array(m + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= m; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[m];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(countConstruct("", ["cat", "dog", "mouse"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
