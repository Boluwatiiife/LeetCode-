// 2626. Array Reduce Transformation

const reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;

  let sum = init;
  for (let i = 0; i < nums.length; i++) {
    sum = fn(sum, nums[i]);
  }
  return sum;
};

console.log(
  reduce(
    (nums = [1, 2, 3, 4]),
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
console.log(
  reduce(
    (nums = [1, 2, 3, 4]),
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100
  )
);
console.log(
  reduce(
    (nums = []),
    function sum(accum, curr) {
      return 0;
    },
    25
  )
);
