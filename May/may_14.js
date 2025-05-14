// 826. Most Profit Assigning Work

const maxProfitAssignment = function (difficulty, profit, worker) {
  worker.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < difficulty.length; i++) {
    arr.push([difficulty[i], profit[i]]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let maxx = 0;
  let sum = 0;
  let i = 0;

  for (w of worker) {
    while (i < arr.length && arr[i][0] <= w) {
      maxx = Math.max(maxx, arr[i][1]);
      i++;
    }
    sum += maxx;
  }
  return sum;
};
console.log(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
);
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]));
console.log(
  maxProfitAssignment(
    [68, 35, 52, 47, 86],
    [67, 17, 1, 81, 3],
    [92, 10, 85, 84, 82]
  )
);
