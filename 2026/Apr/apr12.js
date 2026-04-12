// 3884. First Matching Character From Both Ends

const firstMatchingIndex = function (s) {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === s[n - i - 1]) return i;
  }

  return -1;
};

console.log(firstMatchingIndex("abcacbd"));
console.log(firstMatchingIndex("abc"));
console.log(firstMatchingIndex("abcdab"));
