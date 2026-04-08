// 8. String to Integer (atoi)

const myAtoi = function (s) {
  let num = "";

  for (char of s) {
    if (isNaN(char)) num += "@";
    if (char === ".") num += "@";
    num += char;
  }
//   return num;
  num = num.split("@");
  //   return num;
  let numm = 0;
  for (char of num) {
    if (!isNaN(char[char.length - 1]) && char[0] !== " ") {
      numm = char;
      break;
    }
  }
  if (isNaN(numm)) return 0;

  let temp = Number(numm);

  function clamp_to_32Bit(nnn) {
    const minn = -(2 ** 31);
    const maxx = 2 ** 31 - 1;
    return Math.max(minn, Math.min(maxx, nnn));
  }

  return clamp_to_32Bit(temp);
};

console.log(myAtoi("42"));
console.log(myAtoi("   -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi(".1"));
