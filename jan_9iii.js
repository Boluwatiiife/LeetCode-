// Sorting numbers in an Array.

const re_arrange = function (arr) {
  let length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(re_arrange([3, 5, 1, 13, 7, 10, 12]));
console.log(re_arrange([6, 76, 4, 56, 2, 1, 0]));
