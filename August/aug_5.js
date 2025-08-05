// 8. String to Integer (atoi)

const myAtoi = function (s) {
  function clamp_to_32Bit(nnn) {
    const minn = -(2 ** 31);
    const maxx = 2 ** 31 - 1;
    return Math.max(minn, Math.min(maxx, nnn));
  }

  let ans = [];

  for (const char of s) {
    if (isNaN(char) && char !== "-" && char !== "+") break;
    else if (char === " " && ans.length === 0) continue;
    else if (char === " " && ans.length > 0) break;
    else if (char === "-" && ans.length === 0) ans.push("-");
    else if (char === "+" && ans.length === 0) ans.push("+");
    else if (isNaN(char) && isNaN(ans[ans.length - 1])) {
      ans.pop();
      break;
    } else if (isNaN(char)) break;
    else {
      ans.push(char);
    }
  }
  if (ans.length === 0) return 0;

  const temp = ans.join("");
  const anss = clamp_to_32Bit(Number(temp));
  return isNaN(anss) ? 0 : anss;
};

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("-+12"));
console.log(myAtoi("+-12"));
console.log(myAtoi("   +0 123"));
console.log(myAtoi("21474836++"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("+"));
