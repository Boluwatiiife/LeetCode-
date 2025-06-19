// 2294. Partition Array Such That Maximum Difference Is K

const partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;

  let prev = nums[0];
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    while (nums[i] - prev <= k) {
      j++;
      i++;
    }
    count++;
    prev = nums[j];
  }
  return count;
};

console.log(partitionArray([3, 6, 1, 2, 5], 2));
console.log(partitionArray([1, 2, 3], 1));
console.log(partitionArray([2, 2, 4, 5], 0));
