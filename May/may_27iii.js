// 2576. Find the Maximum Number of Marked Indices

const maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const mid = Math.floor(n / 2);
  let i = 0,
    j = mid;
  let count = 0;

  while (i < mid && j < n) {
    if (2 * nums[i] <= nums[j]) {
      count += 2;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};

console.log(maxNumOfMarkedIndices([3, 5, 2, 4]));
console.log(maxNumOfMarkedIndices([9, 2, 5, 4]));
console.log(maxNumOfMarkedIndices([7, 6, 8]));
console.log(maxNumOfMarkedIndices([2, 1, 7, 9, 2, 3, 9, 6, 5]));
