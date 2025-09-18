// 467. Unique Substrings in Wraparound String

const findSubstringInWraproundString = function (s) {
  function letterToNumber(char) {
    return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
  }

  let ans = Array(26).fill(0);
  ans[letterToNumber(s[0]) - 1]++;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    const beff = letterToNumber(s[i - 1]);
    const curr = letterToNumber(char);
    if (curr === beff + 1 || (beff === 26 && curr === 1)) count++;
    else count = 1;

    ans[letterToNumber(char) - 1] = Math.max(
      ans[letterToNumber(char) - 1],
      count
    );
  }

  return ans.reduce((a, b) => a + b, 0);
};

console.log(findSubstringInWraproundString("a"));
console.log(findSubstringInWraproundString("cac"));
console.log(findSubstringInWraproundString("zab"));
