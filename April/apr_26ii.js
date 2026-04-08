// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

const numOfSubarrays = function (arr, k, threshold) {
  let n = arr.length;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let count = 0;
  if (sum / k >= threshold) count++;

  for (let right = k; right < n; right++) {
    sum -= arr[left];
    sum += arr[right];
    left++;
    if (sum / k >= threshold) count++;
  }
  return count;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
