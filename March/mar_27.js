// 38. Count and Say

const countAndSay = function (n) {
  let no = "1";

  const mapper = function (num) {
    num = num.split("");
    let temp = [];
    let sett = new Set();
    let arr = [];

    for (let i = 0; i < num.length; i++) {
      temp.push(num[i]);
      sett.add(num[i]);
      if (sett.size > 1) {
        temp.pop();
        arr.push([temp.length.toString(), temp[0]]);
        temp = [];
        sett = new Set();
        i--;
      }
    }
    arr.push([temp.length.toString(), temp[0]]);

    const joinnnn = function (xxx) {
      let joined = "";
      for ([x, y] of xxx) {
        joined += x + y;
      }
      return joined;
    };

    no = joinnnn(arr);
  };

  for (let i = 0; i < n - 1; i++) {
    mapper(no);
  }
  return no;
};

console.log(countAndSay(4));
console.log(countAndSay(1));
console.log(countAndSay(2));
