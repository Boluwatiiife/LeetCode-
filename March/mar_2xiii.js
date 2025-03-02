// 2190. Most Frequent Number Following Key In an Array

const mostFrequent = function (nums, key) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      let temp = nums.slice(i + 1);
      let xxx = [];
      for (let x = 0; x < temp.length; x++) {
        if (temp[x] !== temp[0]) break;
        xxx.push(temp[x]);
      }
      arr.push(...xxx);
    }
  }
  let count_arr = new Map();
  for (char of arr) {
    count_arr.set(char, (count_arr.get(char) || 0) + 1);
  }
  let most = Math.max(...[...count_arr.values()]);

  for (char of arr) {
    if (count_arr.get(char) === most) {
      return char;
    }
  }
};

console.log(mostFrequent([1, 100, 200, 1, 100], 1));
console.log(mostFrequent([2, 2, 2, 2, 3], 2));
console.log(mostFrequent([11, 22, 11, 33, 11, 33], 11));
