// 1471. The k Strongest Values in an Array

const getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let mid = Math.floor((n - 1) / 2);

  let left = 0,
    right = n - 1;
  let temp = [];
  while (left <= right) {
    if (Math.abs(arr[right] - arr[mid]) >= Math.abs(arr[left] - arr[mid])) {
      temp.push(arr[right]);
      right--;
    } else if (
      Math.abs(arr[left] - arr[mid]) > Math.abs(arr[right] - arr[mid])
    ) {
      temp.push(arr[left]);
      left++;
    }
    if (temp.length === k) break;
  }

  return temp;
};

console.log(getStrongest([1, 2, 3, 4, 5], 2));
console.log(getStrongest([1, 1, 3, 5, 5], 2));
console.log(getStrongest([6, 7, 11, 7, 6, 8], 5));
console.log(getStrongest([-7, 22, 17, 3], 2));
