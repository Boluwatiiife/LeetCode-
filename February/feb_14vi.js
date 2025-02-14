// 1394. Find Lucky Integer in an Array

const findLucky = function (arr) {
  let count = new Map();
  for (num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  let resultt = [];
  count.forEach((occur, num) => {
    if (num === occur) {
      resultt.push(num);
    }
  });
  if (resultt.length > 0) return Math.max(...resultt);
  return -1;
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
