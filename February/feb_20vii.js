// 1614. Maximum Nesting Depth of the Parentheses

const maxDepth = function (s) {
  let maxx = 0;
  let curr = 0;

  for (char of s) {
    if (char === "(") {
      curr++;
    } else if (char === ")") {
      maxx = Math.max(curr, maxx);
      curr--;
    }
  }
  return maxx;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("()(())((()(())))"));
