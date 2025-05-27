// 2825. Make String a Subsequence Using Cyclic Increments

const canMakeSubsequence = function (str1, str2) {
  function nexttt(char) {
    let num = char.charCodeAt(0);
    let next = num === 122 ? 97 : num + 1;
    return String.fromCharCode(next);
  }
  let n = str1.length;
  let m = str2.length;
  let i = 0,
    j = 0;

  while (i < n && j < m) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      let temp = nexttt(str1[i]);
      if (temp === str2[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
  }
  return m === j;
};

console.log(canMakeSubsequence("abc", "ad"));
console.log(canMakeSubsequence("zc", "ad"));
console.log(canMakeSubsequence("ab", "d"));
