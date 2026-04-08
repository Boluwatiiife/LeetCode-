// 2047. Number of Valid Words in a Sentence

const countValidWords = function (sentence) {
  let word = sentence.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (/[0-9]/.test(word[i])) {
      continue;
    }

    let arr = word[i].split("");
    return arr;
  }

  return word;
};

console.log(countValidWords("cat and  dog"));
console.log(countValidWords("!this  1-s b8d!"));
console.log(countValidWords("alice and  bob are playing stone-game10"));
