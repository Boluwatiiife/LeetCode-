// 28. Find the Index of the First Occurrence in a String

const strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("sssadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));

// two pointer approach

const stringgg = function (haystack, needle) {
  let n = haystack.length,
    m = needle.length;
  if (m > n) return -1;
  for (let i = 0; i < n; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === m) return i;
  }
  return -1;
};

console.log(stringgg("sadbutsad", "sad"));
console.log(stringgg("sssadbutsad", "sad"));
console.log(stringgg("leetcode", "leeto"));
console.log(stringgg("dleetcode", "leet"));
console.log(stringgg("a", "a"));
