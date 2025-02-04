// 821. Shortest Distance to a Character

const shortestToChar = function (s, c) {
  let n = s.length;
  let answer = new Array(n).fill(Infinity);
  let prev = -Infinity;
  // return prev;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    answer[i] = Math.abs(i - prev);
  }
  prev = Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    answer[i] = Math.min(answer[i], Math.abs(i - prev));
  }
  return answer;
};

console.log(shortestToChar("loveleetcode", "e"));
console.log(shortestToChar("aaab", "b"));
