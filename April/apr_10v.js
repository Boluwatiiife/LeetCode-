// 1763. Longest Nice Substring

const longestNiceSubstring = function (s) {
  function check_nice(strr) {
    let sett = new Set(strr);
    sett = [...sett.values()];
    let small = [],
      big = [];
    for (let char of sett) {
      if (char === char.toLowerCase()) {
        small.push(char);
      } else {
        big.push(char.toLowerCase());
      }
    }
    if (small.every((char) => big.includes(char))) {
      if (big.every((char) => small.includes(char))) {
        return true;
      }
    }
    return false;
  }
  let anss = "",
    maxx = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let temp = s.slice(i, j);
      if (check_nice(temp) && temp.length > maxx) {
        anss = temp;
        maxx = temp.length;
      }
    }
  }
  return anss;
};

console.log(longestNiceSubstring("YazaAay"));
console.log(longestNiceSubstring("Bb"));
console.log(longestNiceSubstring("c"));
