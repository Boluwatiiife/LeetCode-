// 2913. Subarrays Distinct Element Sum of Squares I

const sumCounts = function (nums) {
  let n = nums.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = nums.slice(i, j + 1);
      temp = new Set(temp);
      sum += temp.size * temp.size;
    }
  }
  return sum;
};

console.log(sumCounts([1, 2, 1]));
console.log(sumCounts([1, 1]));
console.log(sumCounts([8, 0, 0, 3, 2, 1]));
