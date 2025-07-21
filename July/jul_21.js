// 1957. Delete Characters to Make Fancy String

const makeFancyString = function (s) {
  let ans = [];

  let temp = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (temp[temp.length - 1] !== s[i]) {
      if (temp.length > 2) {
        ans.push(temp[0]);
        ans.push(temp[0]);
        temp = [];
      } else {
        ans.push(...temp);
        temp = [];
      }
    }
    temp.push(s[i]);
  }
  if (temp.length > 2) {
    ans.push(temp[0]);
    ans.push(temp[0]);
  } else {
    ans.push(...temp);
  }

  return ans.join("");
};

console.log(makeFancyString("leeetcode"));
console.log(makeFancyString("aaabaaaa"));
console.log(makeFancyString("aab"));
