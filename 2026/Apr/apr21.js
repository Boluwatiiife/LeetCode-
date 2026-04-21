// 20. Valid Parentheses

const isValid = function (s) {
  let stack = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else if (char === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else return false;
    } else if (char === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else return false;
    } else if (char === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else return false;
    }
  }
  return stack.length > 0 ? false : true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
console.log(isValid("(("));
