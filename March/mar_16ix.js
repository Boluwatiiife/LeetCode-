// 2951. Find the Peaks

const findPeaks = function (mountain) {
  let arr = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1]) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(findPeaks([2, 4, 4]));
console.log(findPeaks([1, 4, 3, 8, 5]));
