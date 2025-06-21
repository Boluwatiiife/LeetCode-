// 2982. Find Longest Special Substring That Occurs Thrice II

const maximumLength = function (s) {
  const n = s.length;
  let len = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i > 0 && s[i] === s[i - 1]) {
      len[i] += len[i - 1] + 1;
    } else {
      len[i] += 1;
    }
  }
  len.reverse();
  let x = 0;
  let ans = -1;
  let alphas = new Array(27).fill(null).map(() => []);
  for (let i = n - 1; i >= 0; i--) {
    alphas[s[i].charCodeAt(0) - 96].push(len[x]);
    x++;
  }
  for (let i = 0; i < alphas.length; i++) {
    let temp = alphas[i];
    if (temp.length >= 3) {
      temp.sort((a, b) => a - b);
      ans = Math.max(ans, temp[temp.length - 3]);
    }
  }

  return ans;
};

console.log(maximumLength("aaaa"));
console.log(maximumLength("abcdef"));
console.log(maximumLength("abcaba"));
console.log(maximumLength("accccerrrc"));
