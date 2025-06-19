// 2817. Minimum Absolute Difference Between Elements With Constraint

class SortedArray {
  constructor() {
    this.arr = [];
  }
  insert(num) {
    let left = 0,
      right = this.arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.arr[mid] < num) left = mid + 1;
      else right = mid;
    }
    this.arr.splice(left, 0, num);
  }

  getClosest(num) {
    const a = this.arr;
    if (a.length === 0) return Infinity;

    let left = 0,
      right = a.length - 1;
    let res = Infinity;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      res = Math.min(res, Math.abs(a[mid] - num));

      if (a[mid] < num) left = mid + 1;
      else right = mid - 1;
    }
    return res;
  }
}

const minAbsoluteDifference = function (nums, x) {
  const n = nums.length;
  let window = new SortedArray();
  let ans = Infinity;
  for (let j = x; j < n; j++) {
    window.insert(nums[j - x]);
    const diff = window.getClosest(nums[j]);
    ans = Math.min(ans, diff);
  }

  return ans;
};

console.log(minAbsoluteDifference([4, 3, 2, 4], 2)); // 0
console.log(minAbsoluteDifference([5, 3, 2, 10, 15], 1)); // 1
console.log(minAbsoluteDifference([1, 2, 3, 4], 3)); // 3
console.log(minAbsoluteDifference([14, 111, 16], 1)); // 2
console.log(minAbsoluteDifference([13, 69, 147, 68], 1)); // 1
