// 2180. Count Integers With Even Digit Sum

const countEven = function (num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    let dig = i.toString();
    dig = dig.split("");
    dig = dig.reduce((a, b) => Number(a) + Number(b) || 0);
    if (dig % 2 == 0) {
      count++;
    }
  }
  return count;
};

console.log(countEven(4));
console.log(countEven(30));
