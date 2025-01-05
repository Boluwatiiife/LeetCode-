// 3264. Final Array State After K Multiplication Operations I

/*
You are given an integer array nums, an integer k, and an integer multiplier.

You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.
Return an integer array denoting the final state of nums after performing all k operations.

*/

const getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let smallest_number = Math.min(...nums);

    for (let x = 0; x < nums.length; x++) {
      if (nums[x] === smallest_number) {
        nums[x] = nums[x] * multiplier;
        break;
      }
    }
  }
  return nums;
};
console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
console.log(getFinalState([1, 2], 3, 4));
console.log(getFinalState([2, 2, 3, 3, 7, 5], 6, 2));
