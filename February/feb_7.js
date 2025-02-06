// 1047. Remove All Adjacent Duplicates In String

const removeDuplicates = function (s) {
  const arr = s.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      arr.splice(i - 1, 1);
    }
  }
  return arr.join("");
};

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));

const duplicatess = function (s) {
  let stack = [];

  for (let char of s) {
    // return stack;
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log(duplicatess("abbaca"));
console.log(duplicatess("azxxzy"));
