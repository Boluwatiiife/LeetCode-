// 2395. Find Subarrays With Equal Sum

const findSubarrays = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length - 1; i++) {
    arr.push(nums[i] + nums[i + 1]);
  }
  let temp = [...new Set(arr)];

  return arr.length === temp.length ? false : true;
};

console.log(findSubarrays([4, 2, 4]));
console.log(findSubarrays([1, 2, 3, 4, 5]));
console.log(findSubarrays([0, 0, 0]));
