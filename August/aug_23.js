// range sum query

const rangeSum = function (arr, x, y) {
  let temp = [0];
  for (const num of arr) {
    temp.push(num + temp[temp.length - 1]);
  }

  return temp[y + 1] - temp[x];
};

console.log(rangeSum([1, 2, 3], 1, 2)); // 5
console.log(rangeSum([1, 2, 3, 5, 6, 4, 3, 1], 2, 5)); // 18
console.log(rangeSum([1, 2, 3, 5, 6, 4, 3, 1, 2, 2, 2, 11, 1], 1, 9)); // 28
console.log(rangeSum([10, 32, 11, 11, 1, 1], 0, 4)); // 65

// 303. Range Sum Query - Immutable

const NumArray = function (nums) {
  this.arr = [0];

  for (const no of nums) {
    this.arr.push(no + this.arr[this.arr.length - 1]);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.arr[right + 1] - this.arr[left];
};
