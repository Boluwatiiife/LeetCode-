// 2248. Intersection of Multiple Arrays

const intersection = function (nums) {
  let n = nums.length;
  let count = new Map();

  for (let i = 0; i < n; i++) {
    let arr = nums[i];
    for (char of arr) {
      count.set(char, (count.get(char) || 0) + 1);
    }
  }
  let temp = [...count.entries()];
  let result = [];
  for ([key, value] of temp) {
    if (value === n) {
      result.push(key);
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
