// 3712. Sum of Elements With Frequency Divisible by K

const sumDivisibleByK = function (nums, k) {
  const mapp = new Map();
  for (const no of nums) {
    mapp.set(no, (mapp.get(no) || 0) + 1);
  }
  const arr = [...new Set(nums)];
  let ans = 0;

  for (const no of arr) {
    if (mapp.get(no) % k === 0) ans += mapp.get(no) * no;
  }

  return ans;
};

console.log(sumDivisibleByK([1, 2, 2, 3, 3, 3, 3, 4], 2));
console.log(sumDivisibleByK([1, 2, 3, 4, 5], 2));
console.log(sumDivisibleByK([4, 4, 4, 1, 2, 3], 3));
