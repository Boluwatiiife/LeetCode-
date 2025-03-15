// 2899. Last Visited Integers

const lastVisitedIntegers = function (nums) {
  let curr = 0;

  let seen = [];
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      seen.splice(0, 0, nums[i]);
      curr = 0;
    } else if (nums[i] === -1) {
      curr++;
      if (curr <= seen.length) {
        ans.push(seen[curr - 1]);
      } else if (curr > seen.length) {
        ans.push(-1);
      }
    }
  }
  return ans;
};

console.log(lastVisitedIntegers([1, 2, -1, -1, -1]));
console.log(lastVisitedIntegers([1, -1, 2, -1, -1]));
