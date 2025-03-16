// 2917. Find the K-or of an Array

const findKOr = function (nums, k) {
  let arr = [];
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i].toString(2).split("").map(Number).reverse();
    arr.push(temp);
    max = Math.max(max, temp.length);
  }
  let check = new Array(max).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === 1) {
        check[j]++;
      }
    }
  }
  for (let i = 0; i < check.length; i++) {
    if (check[i] >= k) {
      check[i] = "1";
    } else {
      check[i] = "0";
    }
  }

  check = check.reverse().join("");
  return parseInt(check, 2);
};

console.log(findKOr([7, 12, 9, 8, 9, 15], 4));
console.log(findKOr([2, 12, 1, 11, 4, 5], 6));
console.log(findKOr([10, 8, 5, 9, 11, 6, 8], 1));
console.log(findKOr([14, 7, 12, 9, 8, 9, 1, 15], 4));
