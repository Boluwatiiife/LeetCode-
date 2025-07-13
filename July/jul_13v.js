// 908. Smallest Range I

const smallestRangeI = function (nums, k) {
  const minn = Math.min(...nums);
  const maxx = Math.max(...nums);

  let diff = maxx - minn - 2 * k;

  return diff > 0 ? diff : 0;
};

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1, 3, 6], 3)); // 0
console.log(smallestRangeI([2, 7, 2], 1)); // 3
