// 1160. Find Words That Can Be Formed by Characters

const countCharacters = function (words, chars) {
  let resultt = [];
  for (let i = 0; i < words.length; i++) {
    let check = chars.split("");
    let word = words[i].split("");
    // return word;
    for (let x = check.length - 1; x >= 0; x--) {
      for (let y = word.length - 1; y >= 0; y--) {
        if (check[x] === word[y]) {
          check.splice(x, 1);
          word.splice(y, 1);
        }
      }
    }
    if (word.length === 0) {
      resultt.push(words[i]);
    }
  }
  let anss = [];
  for (word of resultt) {
    for (letter of word) {
      anss.push(letter);
    }
  }
  return anss.length;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
