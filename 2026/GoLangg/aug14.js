// 3090. Maximum Length Substring With Two Occurrences

const maximumLengthSubstring = function (s) {
  let mapp = new Map();
  let ans = 0;
  let maxx = 0;
  let dex = 0;

  for (let i = 0; i < s.length; i++) {
    mapp.set(s[i], (mapp.get(s[i]) || 0) + 1);
    ans++;
    if (mapp.get(s[i]) > 2) {
      while (true) {
        if (s[dex] === s[i]) {
          mapp.set(s[i], mapp.get(s[i]) - 1);
          dex++;
          ans--;
          break;
        } else {
          mapp.set(s[dex], mapp.get(s[dex]) - 1);
          dex++;
          ans--;
        }
      }
    }
    maxx = Math.max(maxx, ans);
  }

  return maxx;
};

console.log(maximumLengthSubstring("bcbbbcba"));
console.log(maximumLengthSubstring("aaaa"));
console.log(maximumLengthSubstring("eebadadbfa"));
console.log(maximumLengthSubstring("dcfdddccb"));
