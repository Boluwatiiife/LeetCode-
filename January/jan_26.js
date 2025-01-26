// 500. Keyboard Row

const findWords = function (words) {
  const first_row = [
    "q",
    "Q",
    "w",
    "W",
    "e",
    "E",
    "r",
    "R",
    "t",
    "T",
    "y",
    "Y",
    "u",
    "U",
    "i",
    "I",
    "o",
    "O",
    "p",
    "P",
  ];
  const second_row = [
    "a",
    "A",
    "s",
    "S",
    "d",
    "D",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "j",
    "J",
    "k",
    "K",
    "l",
    "L",
  ];
  const third_row = [
    ,
    "z",
    "Z",
    "x",
    "X",
    "c",
    "C",
    "v",
    "V",
    "b",
    "B",
    "n",
    "N",
    "m",
    "M",
  ];
  const outputt = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    if (word.every((letter) => first_row.includes(letter))) {
      outputt.push(word.join(""));
    }
    if (word.every((letter) => second_row.includes(letter))) {
      outputt.push(word.join(""));
    }
    if (word.every((letter) => third_row.includes(letter))) {
      outputt.push(word.join(""));
    }
  }
  return outputt;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk", "cvmbb"]));
console.log(findWords(["adsdf", "sfd"]));
console.log(findWords(["adsdf", "dccc", "ddddd"]));
