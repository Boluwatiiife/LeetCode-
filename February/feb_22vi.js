// 1742. Maximum Number of Balls in a Box

const countBalls = function (lowLimit, highLimit) {
  let resultt = [];
  for (let i = lowLimit; i <= highLimit; i++) {
    let num = i;
    arr = num.toString().split("").map(Number);
    if (arr.length === 1) {
      resultt.push(arr[0]);
    } else {
      resultt.push(arr.reduce((a, b) => a + b));
    }
  }
  //   return resultt;
  let count = new Map();
  for (num of resultt) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  //   return count;
  const timess = [...count.values()];
  return Math.max(...timess);
  return resultt;
};

console.log(countBalls(1, 10));
console.log(countBalls(5, 15));
console.log(countBalls(19, 28));
console.log(countBalls(11, 104));
