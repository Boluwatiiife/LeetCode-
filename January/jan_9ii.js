// 20. Valid Parentheses

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = function (s) {
  let stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let charrr of s) {
    if (["(", "[", "{"].includes(charrr)) {
      stack.push(charrr);
    } else if ([")", "]", "}"].includes(charrr)) {
      if (stack.pop() !== pairs[charrr]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("[[[{{()}}]"));
