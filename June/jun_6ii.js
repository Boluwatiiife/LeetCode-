// 1300. Sum of Mutated Array Closest to Target

const findBestValue = function (arr, target) {
  let left = 0;
  let right = Math.max(...arr);
  let closestDiff = Infinity;
  let bestValue = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currSum = arr.reduce((sum, num) => sum + Math.min(num, mid), 0);
    const diff = Math.abs(currSum - target);

    // update closest value if better, or if tie with smaller value
    if (diff < closestDiff || (diff === closestDiff && mid < bestValue)) {
      closestDiff = diff;
      bestValue = mid;
    }
    if (currSum < target) left = mid + 1;
    else right = mid - 1;
  }

  return bestValue;
};

console.log(findBestValue([4, 9, 3], 10));
console.log(findBestValue([2, 3, 5], 10));
console.log(findBestValue([60864, 25176, 27249, 21296, 20204], 56803));
