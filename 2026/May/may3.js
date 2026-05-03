// 3917. Count Indices With Opposite Parity

const countOppositeParity = function (nums) {
  const n = nums.length;
  let even = 0,
    odd = 0;
  let arr = [];

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
      even++;
      arr.unshift([even, odd]);
    }
    if (nums[i] % 2 !== 0) {
      odd++;
      arr.unshift([even, odd]);
    }
  }

  let result = [];
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] % 2 === 0) {
      result.push(arr[i + 1][1]);
    }
    if (nums[i] % 2 !== 0) {
      result.push(arr[i + 1][0]);
    }
  }
  result.push(0);

  return result;
};
console.log(countOppositeParity([1, 2, 3, 4]));
console.log(countOppositeParity([1]));
