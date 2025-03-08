// 2455. Average Value of Even Numbers That Are Divisible by Three

const averageValue = function (nums) {
  let count = 0;
  let sum = 0;

  for (no of nums) {
    if (no % 2 === 0 && no % 3 === 0) {
      count++;
      sum += no;
    }
  }
  if (count > 0) return Math.floor(sum / count);
  return count;
};

console.log(averageValue([1, 3, 6, 10, 12, 15]));
console.log(averageValue([1, 2, 4, 7, 10]));
console.log(
  averageValue([
    43, 9, 75, 76, 25, 96, 46, 85, 19, 29, 88, 2, 5, 24, 60, 26, 76, 24, 96, 82,
    97, 97, 72, 35, 21, 77, 82, 30, 94, 55, 76, 94, 51,
  ])
);
console.log(averageValue([1, 3, 6, 10, 12, 15]));
