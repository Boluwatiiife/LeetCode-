// 1512. Number of Good Pairs

const numIdenticalPairs = function (nums) {
  let resultt = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j] && i < j) {
        resultt++;
      }
    }
  }
  return resultt;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
