// 3136. Valid Word

const isValid = function (word) {
  if (word.length < 3) return false;
  let conso = "qwrtyplkjhgfdszxcvbnm";

  word = word.toLowerCase();

  let con = [],
    vol = [],
    ch = [],
    num = [];

  for (char of word) {
    if (char === "@" || char === "#" || char === "$") {
      ch.push(char);
    }
    if (!isNaN(char)) {
      num.push(char);
    }
    if (
      char === "a" ||
      char === "u" ||
      char === "o" ||
      char === "i" ||
      char === "e"
    ) {
      vol.push(char);
    } else if (conso.includes(char)) {
      con.push(char);
    }
  }
  if (ch.length > 0) return false;
  if (vol.length === 0 || con.length === 0) return false;
  return true;

  return [con, vol, ch, num];
};

console.log(isValid("234Adas"));
console.log(isValid("b3"));
console.log(isValid("a3$e"));
console.log(isValid("aya"));
