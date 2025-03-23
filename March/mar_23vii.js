// 3442. Maximum Difference Between Even and Odd Frequency I

const maxDifference = function (s) {
  let arr = s.split("");
  let freqq = new Map();
  for (char of arr) {
    freqq.set(char, (freqq.get(char) || 0) + 1);
  }

  let val = [...freqq.values()];

  let arrr = [];
  for (let i = 0; i < val.length; i++) {
    for (let j = 0; j < val.length; j++) {
      if (val[i] % 2 === 0 && val[j] % 2 !== 0) {
        arrr.push(val[j] - val[i]);
      }
    }
  }

  return Math.max(...arrr);
};

console.log(maxDifference("aaaaabbc"));
console.log(maxDifference("abcabcab"));
console.log(maxDifference("mmsmsym"));
