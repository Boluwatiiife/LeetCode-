// 2465. Number of Distinct Averages

const distinctAverages = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let resultt = new Set();
  let n = arr.length / 2;
  let xx = arr.length - 1;

  //   return arr;
  for (let i = 0; i < n; i++) {
    temp = (arr[i] + arr[xx]) / 2;
    resultt.add(temp);
    xx--;
  }
  return resultt.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
console.log(distinctAverages([1, 100]));
