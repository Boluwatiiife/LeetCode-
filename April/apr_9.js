// 300. Longest Increasing Subsequence

const lengthOfLIS = function (nums) {
  let sub = [];

  for (let num of nums) {
    let left = 0,
      right = sub.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < sub.length) {
      sub[left] = num;
    } else {
      sub.push(num);
    }
  }
  return sub.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS([0, 3, 2, 1, 4, 5, 3, 1, 10, 2, 12]));
