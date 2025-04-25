// 1208. Get Equal Substrings Within Budget

const equalSubstring = function (s, t, maxCost) {
  function diffff(one, two) {
    let ans = [];

    for (let i = 0; i < one.length; i++) {
      ans.push(Math.abs(one[i].charCodeAt(0) - two[i].charCodeAt(0)));
    }
    return ans;
  }
  let arr = diffff(s, t);
  let max = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    let no = arr[right];
    sum += no;

    while (sum > maxCost) {
      sum -= arr[left];
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0)); //1
console.log(equalSubstring("krrgw", "zjxss", 19)); //2
console.log(equalSubstring("pxezla", "loewbi", 25)); //4
