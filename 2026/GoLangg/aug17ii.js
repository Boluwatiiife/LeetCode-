// 14. longest

const longestCommonPrefix = function (strs) {
  let i = 1;
  let pref = strs[0];

  while (i < strs.length) {
    if (!strs[i].startsWith(pref)) {
      pref = pref.slice(0, -1);
    } else {
      i++;
    }
  }

  return pref;
};

console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["", ""]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
