// 522. Longest Uncommon Subsequence II

const findLUSlength = function (strs) {
  function check_subseq(a, b) {
    let i = 0,
      j = 0;

    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) i++;
      j++;
    }
    return i === a.length;
  }

  strs.sort((a, b) => b.length - a.length);
  const n = strs.length;
  for (let i = 0; i < n; i++) {
    let is_uncommon = true;
    for (j = 0; j < n; j++) {
      if (i === j) continue;
      if (check_subseq(strs[i], strs[j])) {
        is_uncommon = false;
        break;
      }
    }
    if (is_uncommon) return strs[i].length;
  }
  return -1;
};

console.log(findLUSlength(["aba", "cdc", "eae"]));
console.log(findLUSlength(["aaa", "aaa", "aa"]));
console.log(findLUSlength(["aabbcc", "aabbcc", "cb"]));
