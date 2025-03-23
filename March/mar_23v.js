// 3432. Count Partitions with Even Sum Difference

const countPartitions = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let before = nums.slice(0, i + 1);
    let after = nums.slice(i + 1, nums.length);
    if (before.length > 0 && after.length > 0) {
      before = before.reduce((a, b) => a + b, 0);
      after = after.reduce((a, b) => a + b, 0);
      let no = before - after;
      if (no % 2 === 0) count++;
    }
  }
  return count;
};

console.log(countPartitions([10, 10, 3, 7, 6]));
console.log(countPartitions([1, 2, 2]));
console.log(countPartitions([2, 4, 6, 8]));
