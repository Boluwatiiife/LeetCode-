// 3074. Apple Redistribution into Boxes

const minimumBoxes = function (apple, capacity) {
  capacity = capacity.sort((a, b) => b - a);
  let sum = apple.reduce((a, b) => a + b);

  let count = 0;
  for (let i = 0; i < capacity.length; i++) {
    count += capacity[i];
    if (count >= sum) return i + 1;
  }
};

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]));
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7]));
