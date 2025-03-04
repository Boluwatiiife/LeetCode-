// 2259. Remove Digit From Number to Maximize Result

const removeDigit = function (number, digit) {
  let nums = number.split("");
  let maxx = BigInt(0);

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    if (nums[i] === digit) {
      nums.splice(i, 1);
      let curr_val = BigInt(nums.join(""));
      if (curr_val > maxx) {
        maxx = curr_val;
      }
      nums.splice(i, 0, temp);
    }
  }

  return maxx.toString();
};

console.log(removeDigit("123", "3"));
console.log(removeDigit("1231", "1"));
console.log(removeDigit("551", "5"));
console.log(removeDigit("133235", "3"));
