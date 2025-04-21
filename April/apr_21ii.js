// 2145. Count the Hidden Sequences

const numberOfArrays = function (differences, lower, upper) {
  let n = differences.length;
  let arr = [1];

  for (let i = 0; i < n; i++) {
    let no = differences[i] + arr[arr.length - 1];
    arr.push(no);
  }

  let diff = Math.max(...arr) - Math.min(...arr);
  let ans = upper - lower + 1 - diff;

  return ans > 0 ? ans : 0;
};

console.log(numberOfArrays([1, -3, 4], 1, 6));
console.log(numberOfArrays([3, -4, 5, 1, -2], -4, 5));
console.log(numberOfArrays([4, -7, 2], 3, 6));
