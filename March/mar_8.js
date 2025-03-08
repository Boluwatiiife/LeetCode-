// 2389. Longest Subsequence With Limited Sum

const answerQueries = function (nums, queries) {
  nums = nums.sort((a, b) => a - b);
  nums.push(Infinity);
  let sum = 0;

  let resultt = [];
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];
      if (sum > queries[i]) {
        resultt.push(j);
        sum = 0;
        break;
      }
    }
  }

  return resultt;
};

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
console.log(answerQueries([2, 3, 4, 5], [1]));
console.log(
  answerQueries(
    [736411, 184882, 914641, 37925, 214915],
    [331244, 273144, 118983, 118252, 305688, 718089, 665450]
  )
);
console.log(
  answerQueries(
    [624082],
    [972985, 564269, 607119, 693641, 787608, 46517, 500857, 140097]
  )
);
