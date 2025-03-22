// 3379. Transformed Array

const constructTransformedArray = function (nums) {
  let n = nums.length;
  let arr = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let temp = nums[i];
    if (temp > 0) {
      let dex = (i + temp) % n;
      arr[i] = nums[dex];
    }
    if (temp < 0) {
      let dex = (i - Math.abs(temp)) % n;
      if (dex < 0) dex += n;
      arr[i] = nums[dex];
    }
    if ((temp = 0)) {
      arr[i] = temp;
    }
  }

  return arr;
};

console.log(constructTransformedArray([3, -2, 1, 1]));
console.log(constructTransformedArray([-1, 4, -1]));
console.log(constructTransformedArray([-10, -10]));
console.log(constructTransformedArray([10, 10]));
