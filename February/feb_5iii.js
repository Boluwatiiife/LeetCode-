// 925. Long Pressed Name

const isLongPressedName = function (name, typed) {
  let i = 0;
  let j = 0;

  while (i < typed.length) {
    if (j < name.length && name[j] === typed[i]) {
      j++;
      i++;
    } else if (i > 0 && typed[i] === typed[i - 1]) {
      i++;
    } else {
      return false;
    }
  }
  return j === name.length;
};

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("sed", "ssaaeedd"));
console.log(isLongPressedName("boluwa", "booluwa"));
console.log(isLongPressedName("bolu", "ulob"));
