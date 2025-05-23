// 2109. Adding Spaces to a String

const addSpaces = function (s, spaces) {
  const n = s.length;
  let num = 0;
  let word = "";

  for (let i = 0; i < n; i++) {
    if (i === spaces[num]) {
      word += " ";
      num++;
    }
    word += s[i];
  }
  return word;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
console.log(addSpaces("icodeinpython", [1, 5, 7, 9]));
console.log(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]));
