// 3452. Sum of Good Numbers

const sumOfGoodNumbers = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    let one = nums[i - k] || 0;
    let two = nums[i + k] || 0;

    if (temp > one && temp > two) {
      sum += temp;
    }
  }
  return sum;
};

console.log(sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2));
console.log(sumOfGoodNumbers([2, 1], 1));
