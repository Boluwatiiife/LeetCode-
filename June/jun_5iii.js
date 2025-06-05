// 1208. Get Equal Substrings Within Budget

const equalSubstring = function (s, t, maxCost) {
  function diff(one, two) {
    let arr = [];
    for (let i = 0; i < one.length; i++) {
      arr.push(
        Math.abs(one[i].charCodeAt(0) - 96 - (two[i].charCodeAt(0) - 96))
      );
    }
    return arr;
  }
  const nums = diff(s, t);
  let left = 0;
  let right = 0;
  let sum = 0;
  let max = 0;

  while (right < nums.length) {
    sum += nums[right];
    right++;
    while (sum > maxCost) {
      sum -= nums[left];
      left++;
    }
    max = Math.max(max, right - left);
  }
  return max;
};

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));
console.log(equalSubstring("krrgw", "zjxss", 19));
