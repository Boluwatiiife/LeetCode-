// 830. Positions of Large Groups

const largeGroupPositions = function (s) {
  let ans = [];

  let same = [];
  for (let i = 0; i < s.length; i++) {
    same.push(s[i]);
    if (s[i + 1] !== s[i] && same.length >= 3) {
      let no = i - same.length;
      ans.push([no + 1, i]);
      same = [];
    } else if (s[i + 1] !== s[i]) {
      same = [];
    }
  }

  return ans;
};

console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abc"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
