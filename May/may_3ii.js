// 3234. Count the Number of Substrings With Dominant Ones

const numberOfSubstrings = function (s) {
  let n = s.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let zeros = 0,
      ones = 0;

    for (let j = i; j < n; j++) {
      if (s[j] === "1") ones++;
      else zeros++;

      if (ones >= zeros * zeros) count++;
    }
  }
  return count;
};

console.log(numberOfSubstrings("00011"));
console.log(numberOfSubstrings("101101"));
console.log(numberOfSubstrings("111010011"));
console.log(numberOfSubstrings("000001111"));
