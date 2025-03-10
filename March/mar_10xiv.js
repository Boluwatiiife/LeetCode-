// 2578. Split With Minimum Sum

const splitNum = function (num) {
  let arr = num.toString().split("").map(Number);

  let one = "",
    two = "";
  while (arr.length > 0) {
    one += Math.min(...arr).toString();
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if (arr.length === 0) break;
    two += Math.min(...arr).toString();
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  }
  return Number(one) + Number(two);
};

console.log(splitNum(4325));
console.log(splitNum(687));
console.log(splitNum(12345));
