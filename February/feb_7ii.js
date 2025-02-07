// 1052 Height Checker

const heightChecker = function (heights) {
  let arr = [];
  for (let num of heights) {
    arr.push(num);
  }
  let anss = 0;
  for (let i = 0; i < heights.length; i++) {
    const sortt = heights.sort((a, b) => a - b);
    for (let j = 0; j < arr.length; j++) {
      if (i === j && arr[j] !== heights[i]) {
        anss++;
      }
    }
  }
  return anss;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));

const check_height = function (heights) {
  const expected = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }
  return count;
};
console.log(check_height([1, 1, 4, 2, 1, 3]));
console.log(check_height([5, 1, 2, 3, 4]));
console.log(check_height([1, 2, 3, 4, 5]));
