// 2644. Find the Maximum Divisibility Score

const maxDivScore = function (nums, divisors) {
  let arr = [];

  for (let i = 0; i < divisors.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] === 0) {
        count++;
      }
    }
    arr.push([divisors[i], count]);
  }
  arr = arr.sort((a, b) => a[0] - b[0]);
  arr = arr.sort((a, b) => b[1] - a[1]);

  return arr[0][0];
};

console.log(maxDivScore([2, 9, 15, 50], [5, 3, 7, 2]));
console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3]));
console.log(maxDivScore([20, 14, 21, 10], [10, 16, 20]));
