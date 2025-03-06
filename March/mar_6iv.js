// 2293. Min Max Game

const minMaxGame = function (nums) {
  let arr = nums;
  let n = arr.length;

  while (n > 1) {
    let new_arr = new Array(n / 2);
    for (let i = 0; i < new_arr.length; i++) {
      if (i % 2 === 0) {
        new_arr[i] = Math.min(arr[2 * i], arr[2 * i + 1]);
      } else if (i % 2 !== 0) {
        new_arr[i] = Math.max(arr[2 * i], arr[2 * i + 1]);
      }
    }
    arr = new_arr;
    n = arr.length;
  }
  return arr[0];
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
console.log(minMaxGame([3]));
console.log(minMaxGame([7, 2, 11, 4, 21, 7, 8, 2, 4, 3, 22, 4, 3, 2, 9, 7]));
