// 844. Backspace String Compare

const backspaceCompare = function (s, t) {
  let one = [];
  let two = [];
  for (char of s) {
    if (char === "#") {
      one.pop();
    } else {
      one.push(char);
    }
  }
  for (char of t) {
    if (char === "#") {
      two.pop();
    } else {
      two.push(char);
    }
  }
  return one.join("") === two.join("");
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("a#c", "bd"));
console.log(backspaceCompare("a#c", "bddd"));
