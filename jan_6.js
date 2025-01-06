// 1422. Maximum Score After Splitting a String

/*
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.
*/

const maxScore = function (s) {
  let numberrs = s.split("");
  const n = numberrs.length;
  let maxScore = 0;

  for (let i = 1; i < n; i++) {
    const left = numberrs.slice(0, i);
    const right = numberrs.slice(i);

    const zeros = left.filter((char) => char === "0").length;

    const ones = right.filter((char) => char === "1").length;

    const score = zeros + ones;
    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));
