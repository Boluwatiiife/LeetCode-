// 3731. Find Missing Elements

const findMissingElements = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  let ans = [];

  for (let i = min; i < max; i++) {
    if (!nums.includes(i)) ans.push(i);
  }

  return ans;
};

console.log(findMissingElements([1, 4, 2, 5]));
console.log(findMissingElements([7, 8, 6, 9]));
console.log(findMissingElements([5, 1]));
