// 2965. Find Missing and Repeated Values

const findMissingAndRepeatedValues = function (grid) {
  let arr = [];

  for (char of grid) {
    for (x of char) {
      arr.push(x);
    }
  }
  let count_arr = new Map();
  for (nu of arr) {
    count_arr.set(nu, (count_arr.get(nu) || 0) + 1);
  }
  let resultt = [];
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count_arr.get(arr[i]) > 1) {
      resultt.push(arr[i]);
      temp = arr[i];
    }
    if (count_arr.get(i + 1) === undefined) {
      resultt.push(i + 1);
    }
  }
  resultt = [...new Set(resultt)];
  let anss = [0, 0];
  for (num of resultt) {
    if (num === temp) {
      anss[0] = num;
    } else {
      anss[1] = num;
    }
  }

  return anss;
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);
console.log(
  findMissingAndRepeatedValues([
    [1, 4],
    [3, 1],
  ])
);
console.log(
  findMissingAndRepeatedValues([
    [2, 3],
    [4, 3],
  ])
);
