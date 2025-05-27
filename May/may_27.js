// 2486. Append Characters to String to Make Subsequence

const appendCharacters = function (s, t) {
  const n = s.length;
  const m = t.length;

  let i = 0,
    j = 0;

  while (i < n && j < m) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return m - j;
};

console.log(appendCharacters("coaching", "coding"));
console.log(appendCharacters("abcde", "a"));
console.log(appendCharacters("z", "abcde"));
