// 1961. Check If String Is a Prefix of Array

const isPrefixString = function (s, words) {
  let resultt = "";

  for (char of words) {
    resultt += char;
    if (resultt === s) {
      return true;
    }
  }
  return false;
};

console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
console.log(
  isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])
);
console.log(isPrefixString("z", ["z"]));
