// 1754. Largest Merge Of Two Strings

const largestMerge = function (word1, word2) {
  let i = 0,
    j = 0;
  let merged = "";

  while (i < word1.length || j < word2.length) {
    if (word1.slice(i) > word2.slice(j)) {
      merged += word1[i];
      i++;
    } else {
      merged += word2[j];
      j++;
    }
  }
  return merged;
};

console.log(largestMerge("cabaa", "bcaaa"));
console.log(largestMerge("abcabc", "abdcaba"));
console.log(
  largestMerge("guguuuuuuuuuuuuuuguguuuuguug", "gguggggggguuggguugggggg")
);
console.log(
  largestMerge("uuurruuuruuuuuuuuruuuuu", "urrrurrrrrrrruurrrurrrurrrrruu")
);
