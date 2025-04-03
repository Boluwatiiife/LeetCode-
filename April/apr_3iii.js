// 2874. Maximum Value of an Ordered Triplet II

const maximumTripletValue = function (nums) {
  let n = nums.length;
  if (n < 3) return 0;

  // compute max left[i] (maximum value before index i)
  let max_left = new Array(n).fill(0);
  max_left[0] = nums[0];
  for (let i = 1; i < n; i++) {
    max_left[i] = Math.max(max_left[i - 1], nums[i]);
  }

  // compute max right[i] (maximum value after index i)
  let max_right = new Array(n).fill(0);
  max_right[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    max_right[i] = Math.max(max_right[i + 1], nums[i]);
  }

  //iterate over j (middle element) and calculate max value
  let max_value = 0;
  for (let j = 1; j < n - 1; j++) {
    let left = max_left[j - 1];
    let right = max_right[j + 1];
    let value = (left - nums[j]) * right;

    max_value = Math.max(max_value, value);
  }

  return max_value;
};

console.log(maximumTripletValue([12, 6, 1, 2, 7]));
console.log(maximumTripletValue([1, 10, 3, 4, 19]));
console.log(maximumTripletValue([1, 2, 3]));
