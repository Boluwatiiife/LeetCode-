// 1021. Remove Outermost Parentheses

const removeOuterParentheses = function (s) {
  let one = 0;
  let two = 0;
  let prev = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") one++;
    if (s[i] === ")") two++;
    if (one === two) {
      ans += s.slice(prev + 1, i);
      one = 0;
      two = 0;
      prev = i + 1;
    }
  }
  return ans;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
