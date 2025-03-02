// 2164. Sort Even and Odd Indices Independently

const sortEvenOdd = function (nums) {
  let even = [];
  let odd = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  let arr = [];
  for (let i = 0; i < even.length; i++) {
    arr.push(even[i]);
    arr.push(odd[i]);
  }
  if (nums.length % 2 !== 0) arr.pop();
  return arr;
};

console.log(sortEvenOdd([4, 1, 2, 3]));
console.log(sortEvenOdd([2, 1]));
console.log(
  sortEvenOdd([
    5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21,
  ])
);
