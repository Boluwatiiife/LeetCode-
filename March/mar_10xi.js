// 2562. Find the Array Concatenation Value

const findTheArrayConcVal = function (nums) {
  let sum = 0;

  while (nums.length > 0) {
    if (nums.length === 1) {
      sum += nums[0];
      return sum;
    }
    let temp = nums[0].toString() + nums[nums.length - 1].toString();
    sum += Number(temp);
    nums.splice(0, 1);
    nums.pop();
  }
  return sum;
};

console.log(findTheArrayConcVal([7, 52, 2, 4]));
console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
