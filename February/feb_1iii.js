// 728. Self Dividing Numbers

const selfDividingNumbers = function (left, right) {
  const nums = [];
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }
  let resultt = [];
  for (let i = 0; i < nums.length; i++) {
    let singlee = nums[i].toString().split("").map(Number);

    if (singlee.every((xx) => nums[i] % xx == 0)) {
      resultt.push(nums[i]);
    }
  }
  return resultt;
};

console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(66, 708));
console.log(selfDividingNumbers(47, 85));
console.log(selfDividingNumbers(13, 33));
