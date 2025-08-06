// 3550. Smallest Index With Digit Sum Equal to Index

const smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i]
      .toString()
      .split("")
      .map((xx) => Number(xx))
      .reduce((a, b) => a + b, 0);

    if (temp === i) return i;
  }

  return -1;
};

console.log(smallestIndex([1, 3, 2]));
console.log(smallestIndex([1, 10, 11]));
console.log(smallestIndex([1, 2, 3]));
