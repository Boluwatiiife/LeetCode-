// 2828. Check if a String Is an Acronym of Words

const isAcronym = function (words, s) {
  let n = words.length;
  if (s.length !== n) return false;

  for (let i = 0; i < n; i++) {
    if (s[i] !== words[i][0]) return false;
  }
  return true;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
console.log(isAcronym(["an", "apple"], "a"));
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
