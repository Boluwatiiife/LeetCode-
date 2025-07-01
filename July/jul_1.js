// 205. Isomorphic Strings

const isIsomorphic = function (s, t) {
  let ss = [];
  let tt = [];

  for (let i = 0; i < s.length; i++) {
    if (ss.includes(s[i])) {
      if (tt[ss.indexOf(s[i])] !== t[i]) return false;
    }
    if (tt.includes(t[i])) {
      if (ss[tt.indexOf(t[i])] !== s[i]) return false;
    }
    ss.push(s[i]);
    tt.push(t[i]);
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("ofo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba")); // false
console.log(isIsomorphic("badc", "baba")); // false
console.log(isIsomorphic("badc", "faba")); // false
