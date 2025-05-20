// 1750. Minimum Length of String After Deleting Similar Ends

const minimumLength = function (s) {
  const n = s.length;
  let left = 0;
  let right = n - 1;

  while (left < right && s[left] === s[right]) {
    const check = s[left];

    while (left <= right && s[left] === check) left++;
    while (left <= right && s[right] === check) right--;
  }
  return right - left + 1;
};

console.log(minimumLength("ca"));
console.log(minimumLength("cabaabac"));
console.log(minimumLength("aabccabba"));
console.log(
  minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb")
);
