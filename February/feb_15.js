// 1403. Minimum Subsequence in Non-Increasing Order

const minSubsequence = function (nums) {
  let sortt = nums.sort((a, b) => a - b);

  let arr = [];
  for (let i = sortt.length - 1; i >= 0; i--) {
    arr.push(sortt[i]);
    sortt.pop();
    if (sortt.length < 1) {
      return arr;
    } else if (arr.reduce((a, b) => a + b) > sortt.reduce((a, b) => a + b)) {
      return arr;
    }
  }
};

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4, 4, 7, 6, 7]));
console.log(minSubsequence([6]));
console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([5, 1, 2, 3, 2, 1, 7, 9, 2, 2, 2]));

// time efficicent solution.
const subsequencee_minn = function (nums) {
  nums.sort((a, b) => b - a);
  let summ = 0;
  let arr = [];
  let total_sum = nums.reduce((a, b) => a + b);

  for (digit of nums) {
    summ += digit;
    arr.push(digit);
    if (summ > total_sum - summ) break;
  }
  return arr;
};

console.log(subsequencee_minn([4, 3, 10, 9, 8]));
console.log(subsequencee_minn([4, 4, 7, 6, 7]));
console.log(subsequencee_minn([6]));
console.log(subsequencee_minn([4, 3, 10, 9, 8]));
console.log(subsequencee_minn([5, 1, 2, 3, 2, 1, 7, 9, 2, 2, 2]));
