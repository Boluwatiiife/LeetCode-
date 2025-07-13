// 859. Buddy Strings

const buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  let sss = new Set();
  let ggg = new Set();

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    const one = s[i];
    const two = goal[i];

    sss.add(one);
    ggg.add(two);

    if (!s.includes(two) || !goal.includes(one)) return false;
    if (one !== two) {
      arr.push(i);
    }
  }
  if (arr.length > 2) return false;
  if (arr.length < 2) {
    if (sss.size === s.length) return false;
  }

  return s[arr[0]] === goal[arr[1]] && s[arr[1]] === goal[arr[0]];
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("baae", "caae"));
console.log(buddyStrings("baae", "beaa"));
console.log(buddyStrings("baa", "baa"));
console.log(buddyStrings("boluwatife", "boeuwatifl"));
console.log(buddyStrings("dbca", "bacd"));
console.log(buddyStrings("aba", "aba"));
