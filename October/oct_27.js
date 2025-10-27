// 3349. Adjacent Increasing Subarrays Detection I

const hasIncreasingSubarrays = function (nums, k) {
  let temp = [];
  let dex = 0;

  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    if (temp.length === k) {
      const two = nums.slice(i + 1, i + k + 1);
      if (incress(temp) && incress(two) && two.length === k) return true;
      else {
        temp = [];
        i = dex++;
      }
    }
  }

  return false;
};
function incress(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}

console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3));
console.log(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5));
console.log(hasIncreasingSubarrays([-15, 19], 1));
console.log(hasIncreasingSubarrays([5, 8, -2, -1], 2));
console.log(hasIncreasingSubarrays([19, 5], 1));
console.log(hasIncreasingSubarrays([-3, -19, -8, -16], 2));
