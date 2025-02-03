// 804. Unique Morse Code Words

const uniqueMorseRepresentations = function (words) {
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");
    // return words;
    for (let x = 0; x < words[i].length; x++) {
      if (words[i][x] === "a") {
        words[i][x] = ".-";
      } else if (words[i][x] === "b") {
        words[i][x] = "-...";
      } else if (words[i][x] === "c") {
        words[i][x] = "-.-.";
      } else if (words[i][x] === "d") {
        words[i][x] = "-..";
      } else if (words[i][x] === "e") {
        words[i][x] = ".";
      } else if (words[i][x] === "f") {
        words[i][x] = "..-.";
      } else if (words[i][x] === "g") {
        words[i][x] = "--.";
      } else if (words[i][x] === "h") {
        words[i][x] = "....";
      } else if (words[i][x] === "i") {
        words[i][x] = "..";
      } else if (words[i][x] === "j") {
        words[i][x] = ".---";
      } else if (words[i][x] === "k") {
        words[i][x] = "-.-";
      } else if (words[i][x] === "l") {
        words[i][x] = ".-..";
      } else if (words[i][x] === "m") {
        words[i][x] = "--";
      } else if (words[i][x] === "n") {
        words[i][x] = "-.";
      } else if (words[i][x] === "o") {
        words[i][x] = "---";
      } else if (words[i][x] === "p") {
        words[i][x] = ".--.";
      } else if (words[i][x] === "q") {
        words[i][x] = "--.-";
      } else if (words[i][x] === "r") {
        words[i][x] = ".-.";
      } else if (words[i][x] === "s") {
        words[i][x] = "...";
      } else if (words[i][x] === "t") {
        words[i][x] = "-";
      } else if (words[i][x] === "u") {
        words[i][x] = "..-";
      } else if (words[i][x] === "v") {
        words[i][x] = "...-";
      } else if (words[i][x] === "w") {
        words[i][x] = ".--";
      } else if (words[i][x] === "x") {
        words[i][x] = "-..-";
      } else if (words[i][x] === "y") {
        words[i][x] = "-.--";
      } else if (words[i][x] === "z") {
        words[i][x] = "--..";
      }
    }
    words[i] = words[i].join("");
  }
  const uniquee = [...new Set(words)];
  return uniquee.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["a"]));
