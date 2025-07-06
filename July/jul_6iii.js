// 682. Baseball Game

const calPoints = function (operations) {
  let sum = [];
  for (let i = 0; i < operations.length; i++) {
    let temp = operations[i];
    if (temp === "+") {
      sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
    } else if (temp === "D") {
      sum.push(sum[sum.length - 1] * 2);
    } else if (temp === "C") {
      sum.pop();
    } else {
      sum.push(Number(temp));
    }
  }
  return sum.reduce((a, b) => a + b, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
