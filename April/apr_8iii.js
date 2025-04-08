// can sum
// write a fynction that takes in a target sum and an array of numbers as arguments
// return a boolean indicating whether or not it is possible to generate the target sum using numbers from the array
// you may use an element of the array as many times as needed.

const can_sum = (targetSum, numbers) => {
  let m = targetSum;
  const table = Array(m + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= m; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[m];
};

console.log(can_sum(7, [2, 3])); // true
console.log(can_sum(7, [5, 3, 4, 7])); // true
console.log(can_sum(7, [2, 4])); // false
console.log(can_sum(8, [2, 3, 5])); // true
console.log(can_sum(300, [7, 14])); // false
