// 22. Generate Parentheses

const generateParenthesis = function (n) {
  let arr = [];
  function backtrackk(ss = "", left = 0, right = 0) {
    if (ss.length === 2 * n) {
      arr.push(ss);
      return;
    }
    if (left < n) {
      backtrackk(ss + "(", left + 1, right);
    }
    if (right < left) {
      backtrackk(ss + ")", left, right + 1);
    }
  }
  backtrackk();
  return arr;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
