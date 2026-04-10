// 3861. Minimum Capacity Box

const minimumIndex = function (capacity, itemSize) {
  let ans = -1;

  let arr = [];
  for (let i = 0; i < capacity.length; i++) {
    arr.push([i, capacity[i]]);
  }
  arr.sort((a, b) => a[1] - b[1]);

  for (const [x, y] of arr) {
    if (y >= itemSize) return x;
  }

  return -1;
  return arr;
};

console.log(minimumIndex([1, 5, 3, 7], 3));
console.log(minimumIndex([3, 5, 4, 3], 2));
console.log(minimumIndex([4], 5));
