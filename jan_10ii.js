// 916 Word Subsets

/*
You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

 

Example 1:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
*/

const wordSubsets = function (words1, words2) {
  const getCharCount = (word) => {
    const count = Array(26).fill(0);
    for (const char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return count;
  };

  // Step 1: Determine the maximum character requirements from words2
  const maxCharCount = Array(26).fill(0);
  for (const word of words2) {
    const charCount = getCharCount(word);
    for (let i = 0; i < 26; i++) {
      maxCharCount[i] = Math.max(maxCharCount[i], charCount[i]);
    }
  }

  // Step 2: Filter words1 based on the character requirements
  const result = [];
  for (const word of words1) {
    const charCount = getCharCount(word);
    let isUniversal = true;

    for (let i = 0; i < 26; i++) {
      if (charCount[i] < maxCharCount[i]) {
        isUniversal = false;
        break;
      }
    }

    if (isUniversal) {
      result.push(word);
    }
  }

  return result;
};

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
);
console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"])
);
console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["lo", "eo"]
  )
);
console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["e", "oo"]
  )
);
console.log(wordSubsets(["boluwawtife", "tunde", "lawal"], ["eu"]));
