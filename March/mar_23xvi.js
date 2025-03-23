// 3492. Maximum Containers on a Ship

const maxContainers = function (n, w, maxWeight) {
  let count = 0;
  let space = n * n;

  let sum = 0;
  for (let i = 0; i < space; i++) {
    if (maxWeight - sum < w) break;
    sum += w;
    count++;
  }
  return count;
};

console.log(maxContainers(2, 3, 15));
console.log(maxContainers(3, 5, 20));
console.log(maxContainers(2, 3, 4));
console.log(maxContainers(1, 1000, 1));
