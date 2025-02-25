// 1897. Redistribute Characters to Make All Strings Equal

const makeEqual = function (words) {
  let word = "";
  for (char of words) {
    word += char;
  }
  let count = new Map();
  for (char of word) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  let temp = words.length;
  let uniquee = new Set(word);
  let arr = [...uniquee];

  let resultt = [];
  for (char of arr) {
    let num = count.get(char) / temp;
    if (Number.isInteger(num)) {
      resultt.push(num);
    }
  }

  return resultt.length === arr.length;
};

console.log(makeEqual(["abc", "aabc", "bc"]));
console.log(makeEqual(["ab", "a"]));
console.log(makeEqual(["a", "b"]));
console.log(
  makeEqual([
    "caaaaa",
    "aaaaaaaaa",
    "a",
    "bbb",
    "bbbbbbbbb",
    "bbb",
    "cc",
    "cccccccccccc",
    "ccccccc",
    "ccccccc",
    "cc",
    "cccc",
    "c",
    "cccccccc",
    "c",
  ])
);
