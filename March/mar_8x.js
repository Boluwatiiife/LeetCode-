// 2432. The Employee That Worked on the Longest Task

const hardestWorker = function (n, logs) {
  let arr = [];

  let num = 0;
  for (let i = 0; i < logs.length; i++) {
    let temp = logs[i];
    arr.push(temp[1] - num);
    num = temp[1];
  }
  let maxx = Math.max(...arr);
  let resultt = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxx) {
      resultt = Math.min(resultt, logs[i][0]);
    }
  }
  return resultt;
};

console.log(
  hardestWorker(10, [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ])
);
console.log(
  hardestWorker(26, [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ])
);
console.log(
  hardestWorker(2, [
    [0, 10],
    [1, 20],
  ])
);
console.log(
  hardestWorker(70, [
    [36, 3],
    [1, 5],
    [12, 8],
    [25, 9],
    [53, 11],
    [29, 12],
    [52, 14],
  ])
);
