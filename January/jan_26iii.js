// 506. Relative Ranks

const findRelativeRanks = function (score) {
  const score_with_index = score.map((number, index) => [number, index]);
  // sort the scores in decending order
  score_with_index.sort((a, b) => b[0] - a[0]);
  // create a result array to store the ranks
  const result = new Array(score.length);
  // assign ranks to the athletes
  for (let i = 0; i < score_with_index.length; i++) {
    const rank = i + 1;
    const index = score_with_index[i][1];

    if (rank === 1) {
      result[index] = "Gold Medal";
    } else if (rank === 2) {
      result[index] = "Silver Medal";
    } else if (rank === 3) {
      result[index] = "Bronze Medal";
    } else {
      result[index] = rank.toString();
    }
  }
  return result;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
console.log(findRelativeRanks([1, 2, 3, 4, 5]));
console.log(findRelativeRanks([3, 6, 9, 7, 32, 1]));
