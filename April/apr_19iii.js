// 2090. K Radius Subarray Averages

const getAverages = function (nums, k) {
  let dex = 1 + (k - k, k + k);
  let n = nums.length;
  let arr = new Array(n).fill(-1);

  if (dex > n) return arr;

  let sum = 0;
  for (let i = 0; i < dex; i++) {
    sum += nums[i];
  }
  arr[k] = Math.floor(sum / dex);
  let left = 0;
  let point = k + 1;

  for (let i = dex; i < n; i++) {
    sum -= nums[left];
    sum += nums[i];
    left++;
    arr[point] = Math.floor(sum / dex);
    point++;
  }

  return arr;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
console.log(getAverages([100000], 0));
console.log(getAverages([8], 100000));
