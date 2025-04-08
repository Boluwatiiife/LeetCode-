// how sum
// write a function that takes in a target sum and an array of numbers as arguments
// return an array containing a combination of elements that add up to exactly the target sum

const how_sum = (targetSum, numbers) => {
  let m = targetSum;
  const table = Array(m + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= m; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[m];
};

console.log(how_sum(7, [2, 3])); //
console.log(how_sum(7, [5, 3, 4, 7])); //
console.log(how_sum(7, [2, 4])); //
console.log(how_sum(8, [2, 3, 5])); //
console.log(how_sum(300, [7, 14])); //
