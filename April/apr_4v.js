// 202. Happy Number

const isHappy = function (n) {
  let num = n.toString();

  let answers = [];
  while (true) {
    let arr = [];
    for (char of num) {
      let no = Number(char);
      arr.push(no * no);
    }
    let temp = arr.reduce((a, b) => a + b, 0);
    if (temp === 1) return true;
    if (answers.includes(temp)) return false;
    answers.push(temp);
    num = temp.toString();
  }
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(32));
