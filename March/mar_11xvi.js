// 2656. Maximum Sum With Exactly K Elements

const maximizeSum = function (nums, k) {
  let sum = Math.max(...nums);

  for (let i = 0; i < k - 1; i++) {
    let temp = Math.max(...nums);
    temp = temp + 1;
    sum += temp;
    nums.push(temp);
  }
  return sum;
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
console.log(maximizeSum([5, 5, 5], 2));
