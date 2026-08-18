// 14. longest

const longestCommonPrefix = function (strs) {
  if (strs.length < 2) return strs[0];
  let ans = "";
  let minn = strs[0].length;
  for (word of strs) minn = Math.min(minn, word.length);
  if (minn == 0) return ans;

  let dex = 0;
  while (checkk(dex, strs) && dex < minn) {
    ans += strs[0][dex];
    dex++;
  }

  return ans;
};

const checkk = function (dex, arr) {
  let temp = arr[0][dex];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][dex] !== temp) return false;
  }
  return true;
};

console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["", ""]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
