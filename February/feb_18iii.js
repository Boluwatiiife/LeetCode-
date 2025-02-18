// 1544. Make The String Great

const makeGood = function (s) {
  let stack = [];

  for (char of s) {
    if (
      stack.length > 0 &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) ===
        32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
console.log(makeGood("bBbbboOolUuu"));
