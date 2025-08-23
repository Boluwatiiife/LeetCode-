// 307. Range Sum Query - Mutable

const NumArray = function (nums) {
  this.arr = [0];

  for (const no of nums) {
    this.arr.push(no + this.arr[this.arr.length - 1]);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const temp = this.arr[index + 1] - this.arr[index] - val;
  for (let i = index + 1; i < this.arr.length; i++) {
    this.arr[i] -= temp;
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

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2));
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2));
