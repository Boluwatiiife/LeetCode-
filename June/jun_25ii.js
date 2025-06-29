// 3479. Fruits Into Baskets III

const numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length;
  let arr = baskets.map((num, dex) => [num, dex]).sort((a, b) => a[0] - b[0]);

  for (const no of fruits) {
    let left = 0,
      right = arr.length - 1;
    let xxx = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [num, dex] = arr[mid];
      if (num >= no) {
        xxx = mid;
        right = mid - 1;
      } else left = mid + 1;
    }
    if (xxx === -1) continue;
    let minn = arr[xxx][1];
    let remm = arr.slice(xxx + 1, arr.length).sort((a, b) => a[1] - b[1]);
    if (remm.length > 0) {
      if (
        remm[0][0] >= no &&
        remm[0][0] !== Infinity &&
        remm[0][1] < arr[xxx][1]
      ) {
        minn = remm[0][1];
      }
    }
    baskets[minn] = Infinity;
    arr = baskets.map((num, dex) => [num, dex]).sort((a, b) => a[0] - b[0]);
    let neww = arr.filter(([x, y]) => x !== Infinity);
    arr = neww;
  }
  const ans = baskets.filter((xx) => xx !== Infinity);
  return ans.length;
};

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]));
// console.log(numOfUnplacedFruits([5, 2, 5], [-Infinity, 4, -Infinity]));
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]));
console.log(numOfUnplacedFruits([31], [6]));
console.log(numOfUnplacedFruits([30, 67], [49, 99]));
console.log(numOfUnplacedFruits([13, 68, 77], [18, 95, 74]));
// console.log(numOfUnplacedFruits([68, 77], [Infinity, 95, 74]));

// console.log(numOfUnplacedFruits([4, 3, 2, 1, 1], [3, 5, 4, 6, 4]));
// console.log(numOfUnplacedFruits([4, 2, 5, 2], [6, 3, 5, 4]));
// console.log(numOfUnplacedFruits([4, 2, 5], [2, 3, 5]));
