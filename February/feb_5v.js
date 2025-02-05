// 941. Valid Mountain Array

const validMountainArray = function (arr) {
  const maxx = Math.max(...arr);

  if (arr[0] === maxx) return false;
  if (arr[arr.length - 1] === maxx) return false;
  const count = arr.reduce((acc, num) => acc + (num === maxx ? 1 : 0), 0);
  if (count > 1) return false;

  let beffore = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxx) break;
    else {
      beffore.push(arr[i]);
    }
  }
  for (let i = 0; i < beffore.length; i++) {
    if (beffore[i + 1] <= beffore[i]) {
      return false;
    }
  }
  for (let i = arr.indexOf(maxx) + 1; i < arr.length; i++) {
    if (arr[i + 1] >= arr[i]) {
      return false;
    }
  }
  return true;
};

console.log(validMountainArray([0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 11]));
console.log(validMountainArray([3, 5, 5, 4, 3]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([1, 2, 3]));
console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0]));
console.log(validMountainArray([0, 2, 3, 3, 2, 1, 5, 2, 1, 0]));
