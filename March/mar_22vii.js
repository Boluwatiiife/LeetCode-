// 3392. Count Subarrays of Length Three With a Condition

const countSubarrays = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = nums.slice(i, i + 3);
    if (temp.length === 3) {
      if (temp[0] + temp[2] === temp[1] / 2) count++;
    }
  }
  return count;
};

console.log(countSubarrays([1, 2, 1, 4, 1]));
console.log(countSubarrays([1, 1, 1]));
