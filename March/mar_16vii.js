// 2942. Find Words Containing Character

const findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let temp = words[i];
    if (temp.includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
