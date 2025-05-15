// 923. 3Sum With Multiplicity

const threeSumMulti = function (arr, target) {
  arr.sort((a, b) => a - b);
  const MOD = 1e9 + 7;
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    let temp = target - arr[i];
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum < temp) left++;
      else if (sum > temp) right--;
      else {
        // sum===temp
        if (arr[left] !== arr[right]) {
          let leftCount = 1;
          let rightCount = 1;
          while (left + 1 < right && arr[left] === arr[left + 1]) {
            leftCount++;
            left++;
          }
          while (right - 1 > left && arr[right] === arr[right - 1]) {
            rightCount++;
            right--;
          }
          count += leftCount * rightCount;
          count %= MOD;
          left++;
          right--;
        } else {
          // arr[left]===arr[right]
          let m = right - left + 1;
          count += (m * (m - 1)) / 2;
          count %= MOD;
          break;
        }
      }
    }
  }
  return count;
};

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8));
console.log(threeSumMulti([1, 1, 2, 2, 2, 2], 5));
console.log(threeSumMulti([2, 1, 3], 6));
console.log(threeSumMulti([0, 0, 0], 0));
