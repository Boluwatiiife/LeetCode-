// 2873. Maximum Value of an Ordered Triplet I

const maximumTripletValue = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i < j && j < k) {
          let temp = (nums[i] - nums[j]) * nums[k];
          max = Math.max(max, temp);
        }
      }
    }
  }
  return max;
};

console.log(maximumTripletValue([12, 6, 1, 2, 7]));
console.log(maximumTripletValue([1, 10, 3, 4, 19]));
console.log(maximumTripletValue([1, 2, 3]));
