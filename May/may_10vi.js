// 633. Sum of Square Numbers

const judgeSquareSum = function (c) {
  function square_sum(one, two) {
    return one * one + two * two;
  }
  let n = Math.ceil(Math.sqrt(c));

  let left = 0,
    right = n;

  while (left <= right) {
    let target = square_sum(left, right);
    if (target === c) return true;
    else if (target > c) right--;
    else if (target < c) left++;
  }

  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(13));
console.log(judgeSquareSum(4));
console.log(judgeSquareSum(100));
console.log(judgeSquareSum(999999999));
