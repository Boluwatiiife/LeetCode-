// 1717. Maximum Score From Removing Substrings

const maximumGain = function (s, x, y) {
  function stackstacker(word, one, two, point) {
    let stack = [];
    let ans = 0;

    for (const char of word) {
      if (stack.length > 0 && stack[stack.length - 1] === one && char === two) {
        stack.pop();
        ans += point;
      } else {
        stack.push(char);
      }
    }
    return { newString: stack.join(""), ans };
  }
  let ans = 0;

  if (x >= y) {
    const onee = stackstacker(s, "a", "b", x);
    const twoo = stackstacker(onee.newString, "b", "a", y);
    ans = onee.ans + twoo.ans;
  } else {
    const onee = stackstacker(s, "b", "a", y);
    const twoo = stackstacker(onee.newString, "a", "b", x);
    ans = onee.ans + twoo.ans;
  }

  return ans;
};

console.log(maximumGain("cdbcbbaaabab", 4, 5));
console.log(maximumGain("aabbaaxybbaabb", 5, 4));
