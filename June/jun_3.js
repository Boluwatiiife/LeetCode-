// 1750. Minimum Length of String After Deleting Similar Ends

const minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;
  let temp = "";

  while (left < right) {
    if (s[left] === s[right]) {
      temp = s[left];
    } else if (s[left] !== s[right]) break;

    while (s[left] === temp) left++;
    while (s[right] === temp) right--;
  }
  let ans = right - left + 1;
  return ans > 0 ? ans : 0;
};

console.log(minimumLength("ca"));
console.log(minimumLength("cabaabac"));
console.log(minimumLength("aabccabba"));
