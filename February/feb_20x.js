// 1629. Slowest Key

const slowestKey = function (releaseTimes, keysPressed) {
  let letters = keysPressed.split("");
  let nums = [];

  nums.push(releaseTimes[0]);
  for (let i = 1; i < releaseTimes.length; i++) {
    nums.push(releaseTimes[i] - releaseTimes[i - 1]);
  }
  let maxx = Math.max(...nums);
  let arr = [];
  let leng = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxx) {
      arr.push(letters[i]);
    }
  }
  arr.sort();
  return arr[arr.length - 1];
};

console.log(slowestKey([9, 29, 49, 50], "cbcd"));
console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));
