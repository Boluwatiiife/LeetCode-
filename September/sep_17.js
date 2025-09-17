// 397. Integer Replacement

const integerReplacement = function (n) {
  let i = 0;

  let ans = [n];
  while (!ans.includes(1)) {
    let temp = [];
    for (const num of ans) {
      if (num % 2 === 0) temp.push(num / 2);
      else {
        temp.push(num + 1);
        temp.push(num - 1);
      }
    }
    ans = temp;
    i++;
  }
  return i;
};

console.log(integerReplacement(8));
console.log(integerReplacement(7));
console.log(integerReplacement(4));
console.log(integerReplacement(6));
