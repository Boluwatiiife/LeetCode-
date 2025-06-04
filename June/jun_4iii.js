// 792. Number of Matching Subsequences

const numMatchingSubseq = function (s, words) {
  const indexMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!indexMap[char]) indexMap[char] = [];
    indexMap[char].push(i);
  }

  let count = 0;

  for (const word of words) {
    let prevIndex = -1;
    let isSubsequence = true;

    for (const char of word) {
      const indices = indexMap[char];
      if (!indices) {
        isSubsequence = false;
        break;
      }

      let left = 0,
        right = indices.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (indices[mid] > prevIndex) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      if (left === indices.length) {
        isSubsequence = false;
        break;
      }
      prevIndex = indices[left];
    }
    if (isSubsequence) count++;
  }
  return count;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
console.log(
  numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])
);
