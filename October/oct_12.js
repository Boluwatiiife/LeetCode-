// 3707. Equal Score Substrings

const scoreBalance = function (s) {
  let rr = s[0].charCodeAt(0) - 96,
    ll = s[s.length - 1].charCodeAt(0) - 96;
  let left = 1,
    right = s.length - 2;

  while (left <= right) {
    if (rr <= ll) {
      rr += s[left].charCodeAt(0) - 96;
      left++;
    } else {
      ll += s[right].charCodeAt(0) - 96;
      right--;
    }
  }

  return rr === ll;
};

console.log(scoreBalance("adcb"));
console.log(scoreBalance("bace"));
console.log(scoreBalance("abcdeo"));
