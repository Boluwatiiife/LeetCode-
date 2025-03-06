// 2287. Rearrange Characters to Make Target String

const rearrangeCharacters = function (s, target) {
  let s_count = new Map();
  let target_count = new Map();

  for (char of s) {
    s_count.set(char, (s_count.get(char) || 0) + 1);
  }
  for (char of target) {
    target_count.set(char, (target_count.get(char) || 0) + 1);
  }

  let count = Infinity;

  for (char of target) {
    if (!s.includes(char)) {
      return 0;
    }
    count = Math.min(
      count,
      Math.floor(s_count.get(char) / target_count.get(char))
    );
  }

  return count;
};

console.log(rearrangeCharacters("loonbalxballpoonballoo", "balloon"));
console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
console.log(rearrangeCharacters("abcba", "abc"));
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));
// console.log(rearrangeCharacters("xxxxxx", "aaa"));
console.log(rearrangeCharacters("abcabcabcabc", "aabbcc"));
console.log(
  rearrangeCharacters(
    "ccccndxxlzerbsrrkvdnlvynxbjtjldsqgevphdlrldyishznryttvuratvwiafiwyjklafesvmcexuacxqgmnokfljxkystcbef",
    "bvciovnpto"
  )
);
console.log(
  rearrangeCharacters(
    "cqlcqrqzqrampbumlixalzclhxvudysxykeblrkufyvowpufzecwyobjgbzgbkjqmrpibyugjlybukidzlnmxomkfpwp",
    "zqizcx"
  )
);
