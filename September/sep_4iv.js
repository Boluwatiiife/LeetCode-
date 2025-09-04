// 168. Excel Sheet Column Title

const convertToTitle = function (columnNumber) {
  let ans = [];
  if (columnNumber < 27) return String.fromCharCode(65 + columnNumber - 1);

  while (columnNumber > 26) {
    let fixx = columnNumber / 26;
    if (fixx % 1 === 0) {
      ans.unshift("Z");
      columnNumber = fixx - 1;
    } else {
      let no = Math.floor(columnNumber / 26);
      let rem = columnNumber - 26 * no;
      ans.unshift(String.fromCharCode(65 + rem - 1));
      columnNumber = no;
    }
  }
  ans.unshift(String.fromCharCode(65 + columnNumber - 1));

  return ans.join("");
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(7041));
console.log(convertToTitle(2000000001));
console.log(convertToTitle(52));
console.log(convertToTitle(104));
console.log(convertToTitle(104333));
