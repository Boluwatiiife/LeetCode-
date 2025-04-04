// 238. Product of Array Except Self

const productExceptSelf = function (nums) {
  let n = nums.length;
  let arr = new Array(n).fill(1);

  // prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = prefix;
    prefix *= nums[i];
  }

  // suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    arr[i] *= suffix;
    suffix *= nums[i];
  }

  return arr;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
