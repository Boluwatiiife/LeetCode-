// 2748. Number of Beautiful Pairs

const countBeautifulPairs = function (nums) {
  function gccd(x, y) {
    return y === 0 ? x : gccd(y, x % y);
  }
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j) {
        let xxx = nums[i].toString();
        let yyy = nums[j].toString();
        let one = xxx[0];
        let two = yyy[yyy.length - 1];
        one = Number(one);
        two = Number(two);
        // return [one, two];

        if (gccd(one, two) === 1) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(countBeautifulPairs([2, 5, 1, 4]));
console.log(countBeautifulPairs([11, 21, 12]));
