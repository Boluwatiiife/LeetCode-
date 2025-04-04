// 215. Kth Largest Element in an Array

const findKthLargest = function (nums, k) {
  let count = 1;

  let no = Math.max(...nums);

  while (count < k) {
    nums.splice(nums.indexOf(no), 1);

    no = Math.max(...nums);
    count++;
  }
  return no;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5], 4));
