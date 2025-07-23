// 1717. Maximum Score From Removing Substrings

const maximumGain = function (s, x, y) {
  let one = Math.max(x, y) === x ? "ab" : "ba";
  let two = one === "ab" ? "ba" : "ab";
  const num = Math.max(x, y);

  function stackstacker() {
    let stack = [];
    let ans = 0;

    for (const char of s) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === one[0] &&
        char === one[1]
      ) {
        stack.pop();
        ans += num;
      } else {
        stack.push(char);
      }
    }
    s = stack.join("");
    return ans;
  }
  function stackstackerr() {
    let stack = [];
    let ans = 0;

    for (const char of s) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === two[0] &&
        char === two[1]
      ) {
        stack.pop();
        ans += Math.min(x, y);
      } else {
        stack.push(char);
      }
    }
    return ans;
  }

  return stackstacker() + stackstackerr();
};

console.log(maximumGain("cdbcbbaaabab", 4, 5));
console.log(maximumGain("aabbaaxybbaabb", 5, 4));
