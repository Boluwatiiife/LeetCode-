// 744. Find Smallest Letter Greater Tham Target.

const nextGreatestLetter = function (letters, target) {
  let alphaa = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const filterred = letters.filter((letter) => letter > target);
  const sortt = filterred.sort();
  for (let i = alphaa.indexOf(target); i < alphaa.length; i++) {
    for (let x = 0; x < sortt.length; x++) {
      if (sortt[x] === target || target > sortt[x]) {
        x++;
      }
      if (sortt.includes(alphaa[i])) {
        return sortt[x];
      }
    }
  }
  return letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
console.log(nextGreatestLetter(["r", "w", "c", "f"], "e"));
console.log(nextGreatestLetter(["c", "f", "j"], "d"));
console.log(nextGreatestLetter(["c", "f", "j"], "g"));
