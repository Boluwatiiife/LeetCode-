// 2303. Calculate Amount Paid in Taxes

const calculateTax = function (brackets, income) {
  let nums = [];

  let sum = 0;
  let total = 0;
  for (let i = 0; i < brackets.length; i++) {
    let arr = brackets[i];
    sum = arr[0] - sum;
    let temp = sum;
    total += temp;

    sum = arr[0];
    if (total > income) {
      temp = income - (total - temp);
    }
    if (temp < 0) {
      temp = 0;
    }
    nums.push(temp * (arr[1] / 100));
  }
  nums = nums.reduce((a, b) => a + b);
  return parseFloat(nums.toFixed(5));
};

console.log(
  calculateTax(
    [
      [3, 50],
      [7, 10],
      [12, 25],
    ],
    10
  )
);
console.log(
  calculateTax(
    [
      [1, 0],
      [4, 25],
      [5, 50],
    ],
    2
  )
);
console.log(calculateTax([[2, 50]], 0));
console.log(
  calculateTax(
    [
      [2, 7],
      [3, 17],
      [4, 37],
      [7, 6],
      [9, 83],
      [16, 67],
      [19, 29],
    ],
    18
  )
);
