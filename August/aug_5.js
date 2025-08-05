// 8. String to Integer (atoi)

const myAtoi = function (s) {
  function clamp_to_32Bit(nnn) {
    const minn = -(2 ** 31);
    const maxx = 2 ** 31 - 1;
    return Math.max(minn, Math.min(maxx, nnn));
  }
  const arr = s.split("");
  let temp = [];
  let count = 0;

  for (const char of arr) {
    if (char === "-" || char === "+") count++;
    if (count > 1) break;
    // if (temp.includes("-")) break;
    if (char === "-") temp.push("-");
    if (char === "+") temp.push("+");
    if (temp.length > 0 && char === " ") break;
    if (char === " ") continue;
    if (!isNaN(char)) temp.push(char);
    // if ((isNaN(char) && temp.includes("-")) || temp.includes("+")) break;
    if (isNaN(char) && char !== "-" && char !== "+") break;
  }

  //   return temp;
  if (temp[temp.indexOf("-") + 1] === "+") {
    temp = temp.slice(temp.indexOf("+") + 1, temp.length);
  }
  //   return temp;
  if (temp.indexOf("-") === 0 && temp.length === 1) return 0;
  if (temp.indexOf("-") !== 0 && temp.includes("-"))
    temp = temp.slice(0, temp.indexOf("-"));
  while (isNaN(temp[temp.length - 1])) temp.pop();
  let ans = Number(temp.join(""));

  //   return temp;
  return clamp_to_32Bit(ans);
  return Number(temp);
  return temp;
};

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("-+12"));
console.log(myAtoi("   +0 123"));
console.log(myAtoi("21474836++"));
