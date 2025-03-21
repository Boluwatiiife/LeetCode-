// 3285. Find Indices of Stable Mountains

const stableMountains = function (height, threshold) {
  let arr = [];

  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(stableMountains([1, 2, 3, 4, 5], 2));
console.log(stableMountains([10, 1, 10, 1, 10], 3));
console.log(stableMountains([10, 1, 10, 1, 10], 10));
